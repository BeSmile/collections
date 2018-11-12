package main

import (
	"fmt"
	"os"
)

func main() {
	f := createFile("./defer.txt")
	//程序结束时执行
	defer closeFile(f)
	writeFile(f)
}

func createFile(fileName string) *os.File {
	file, err := os.Create(fileName)
	if err != nil {
		panic(err)
	}
	return file
}

func closeFile(f *os.File) {
	fmt.Println("closing")
	f.Close()
}

func writeFile(f *os.File) {
	fmt.Fprintln(f, "data")
}
