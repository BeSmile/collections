package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
	"time"
)

func main() {
	listener, err := net.Listen("tcp", "localhost:8000")

	if err != nil {
		fmt.Print(err)
	}

	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Print(err)
		}
		go handleConn1(conn)
	}

}

func handleConn1(c net.Conn) {
	//从conn接收命令输入行
	input := bufio.NewScanner(c)
	//持续输入
	for input.Scan() {
		echo(c, input.Text(), 1*time.Second)
	}
	c.Close()
}

func echo(c net.Conn, shout string, delay time.Duration) {
	//往net.Conn 写入数据
	fmt.Fprint(c, "\t", strings.ToUpper(shout))
	time.Sleep(delay)
	fmt.Fprintln(c, "\t", shout)
	time.Sleep(delay)
	fmt.Fprintln(c, "\t", strings.ToLower(shout))
}
