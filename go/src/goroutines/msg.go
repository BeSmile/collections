package main

import (
	"fmt"
	"sync"
	"time"
)

type Message struct {
	sync.RWMutex
	memoryMsgChan     chan string
	startChan         chan int
	pauseChan         chan int
	exitChan          chan int
	channelUpdateChan chan int
	waitGroup         WaitGroupWrapper
	channelMap        map[string]chan int
}

func newMessage() *Message {
	m := &Message{
		startChan:         make(chan int, 1),
		pauseChan:         make(chan int),
		channelUpdateChan: make(chan int),
		exitChan:          make(chan int),
		memoryMsgChan:     make(chan string),
		channelMap:        make(map[string]chan int),
	}
	m.waitGroup.Wrapper(m.messagePump)
	return m
}

func (m *Message) Empty() error {
	for {
		select {
		case <-m.memoryMsgChan:
		default:
			goto finish
		}
	}

finish:
	return nil
}

func (m *Message) Start() {
	select {
	case m.startChan <- 1:
	default:
	}
}

func (m *Message) Delete() {
	m.exit()
}

func (m *Message) exit() {
	close(m.exitChan)
}
func (m *Message) put(msg string) {
	select {
	case m.memoryMsgChan <- msg:
		fmt.Println("51")
	default:
		fmt.Println("34")
	}
}

func (m *Message) GetChannel(channelName string) chan int {
	m.Lock()
	channel, isNew := m.channelMap[channelName]
	m.Unlock()
	if !isNew {
		// update messagePump state
		fmt.Println("is New")
		select {
		case m.channelUpdateChan <- 1:
			fmt.Println("gt udate")
		case <-m.exitChan:
			fmt.Println("gt exit")
		}
	}
	m.Start()

	return channel
}

//输出chan
func (m *Message) messagePump() {
	for {
		fmt.Println("pump first")
		select {
		case <-m.channelUpdateChan:
			fmt.Println("pump update")
			continue
		case <-m.pauseChan:
			continue
		case <-m.exitChan:
			goto exit
		case <-m.startChan:
		}
		break
	}
	fmt.Println("232f")
	for {
		fmt.Println("232f")
		select {
		case msg := <-m.memoryMsgChan:
			{
				fmt.Println("23", msg)
			}
		case <-m.exitChan:
			goto exit
		}
	}
exit:
	fmt.Println("chan has exit")
}

func main() {
	msg := newMessage()
	//fmt.Println(msg)

	msg.GetChannel("test")
	//time.Sleep(time.Second * 5)
	msg.put("star222t")
	//msg.Delete()
	time.Sleep(time.Hour)
}

type WaitGroupWrapper struct {
	sync.WaitGroup
}

func (w *WaitGroupWrapper) Wrapper(cb func()) {
	w.Add(1)

	go func() {
		cb()
		w.Done()
	}()
}
