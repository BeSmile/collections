package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
)

type client chan<- string

var (
	entering = make(chan client)
	leaving  = make(chan client)
	messages = make(chan string)
)

//广播事件
func broadcaster() {
	//创建map保存client
	clients := make(map[client]bool)

	//持续监听离开、加入、消息事件
	for {
		select {
		case cli := <-entering:
			clients[cli] = true
		case cli := <-leaving:
			delete(clients, cli)
			close(cli)
		case msg := <-messages:
			for cli := range clients {
				cli <- msg
			}
		}
	}
}

func main() {
	listener, err := net.Listen("tcp", "127.0.0.1:8000")

	if err != nil {
		log.Fatal(err)
	}
	go broadcaster()

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Fatal(err)
			continue
		}
		go handleChat(conn)
	}
}

func clientWriter(conn net.Conn, ch <-chan string) {
	for pr := range ch {
		fmt.Fprintln(conn, pr)
	}
}

func handleChat(conn net.Conn) {
	ch := make(chan string)

	go clientWriter(conn, ch)

	who := conn.RemoteAddr().String()

	ch <- "You are" + who

	entering <- ch

	messages <- who + "has arrived"

	input := bufio.NewScanner(conn)

	for input.Scan() {
		messages <- input.Text()
	}

	leaving <- ch

	messages <- who + " has left"

	conn.Close()
}
