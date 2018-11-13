package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"sync"
	"time"
)

var verbose2 = flag.Bool("v", false, "show verbose progress messages")
var sema = make(chan struct{}, 20)

func walkDir2(dir string, n *sync.WaitGroup, fileSizes chan<- int64) {
	defer n.Done()
	for _, entry := range dirents2(dir) {

		if entry.IsDir() {
			n.Add(1)
			subdir := filepath.Join(dir, entry.Name())
			go walkDir2(subdir, n, fileSizes)
		} else {
			fileSizes <- entry.Size()
		}
	}
}

func dirents2(fileName string) []os.FileInfo {
	sema <- struct{}{} // acquire token
	defer func() { <-sema }()

	entries, err := ioutil.ReadDir(fileName)

	if err != nil {
		fmt.Fprintln(os.Stdout, "du1: %v\n", err)
	}

	return entries
}

func printDiskUsage2(nfiles, nbytes int64) {
	fmt.Printf("%d files %.1f GB\n", nfiles, float64(nbytes)/1e9)
}

func spinner(tm time.Duration) {
	in := time.NewTimer(tm)
	for {
		for _, t := range `-\|/` {
			fmt.Fprint(os.Stdout, t)
			<-in.C
			in.Reset(tm)
		}
	}
}

func disk(ver *bool, roots []string) {
	var n sync.WaitGroup
	fileSizes := make(chan int64, 10)

	for _, root := range roots {
		n.Add(1)

		go walkDir2(root, &n, fileSizes)
	}

	go func() {
		n.Wait()
		close(fileSizes)
	}()

	var tick <-chan time.Time

	if *verbose2 {
		tick = time.Tick(100 * time.Millisecond)
	}

	var nfiles, nbytes int64

loop:
	for {
		select {
		case size, ok := <-fileSizes:
			if !ok {
				break loop
			}
			nfiles++
			nbytes += size
		case <-tick:
			//fmt.Println("xxx")
			//printDiskUsage2(nfiles, nbytes)
			break
		default:
		}
	}
	printDiskUsage2(nfiles, nbytes)
}

func main() {
	//go spinner(time.Microsecond * 100)
	flag.Parse()
	roots := flag.Args()
	if len(roots) == 0 {
		roots = []string{"."}
	}
	disk(verbose2, roots)

	var tk <-chan time.Time
	tk = time.Tick(time.Second * 5)

	for {
		select {
		case <-tk:
			{
				disk(verbose2, roots)
			}
		}
	}
}
