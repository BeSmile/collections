package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

type Menu struct {
	fileName string
	children []Menu
}

func readFile(fileName string) []Menu {
	files, _ := ioutil.ReadDir(fileName)
	var menus []Menu
	for _, file := range files {

		name := file.Name()
		var children []Menu

		dir := fileName + "/" + name //目录
		fi, err := os.Stat(dir)
		if err != nil {
			fmt.Println(err)
			return menus
		}
		//文件夹继续递归遍历
		switch mode := fi.Mode(); {
		case mode.IsDir():
			// do directory stuff
			fmt.Println("dir")

			children = readFile(dir)
		case mode.IsRegular():
			// do file stuff
			// fmt.Println("file")
		}
		menu := Menu{fileName: name, children: children}
		menus = append(menus, menu)
	}
	return menus
}

func main() {
	dir := "resource"
	files := readFile(dir)
	for _, file := range files {
		fmt.Println(file.fileName)
		dist := file.children
		for _, f := range dist {
			fmt.Println("  " + f.fileName)
		}
	}
}
