package main

import (
	"crypto/sha256"
	"flag"
	"fmt"
	"golang.org/x/crypto/sha3"
)

//crypto/sha256包的Sum256函數對一個任意的字節slice類型的數據生
//成一個對應的消息摘要。消息摘要有256bit大小，因此對應[32]byte數組類型。如果兩個消息
//摘要是相同的，那麽可以認爲兩個消息本身也是相同

var action = flag.String("a", "sha256", "hash码方式")
var value = flag.String("v", "", "参数")

func main() {
	c1 := sha256.Sum256([]byte("x"))
	c2 := sha256.Sum256([]byte("X"))
	fmt.Printf("%x\n%x\n%t\n%T\n", c1, c2, c1 == c2, c1)

	flag.Parse()
	fmt.Println(*action)
	switch *action {
		case "sha256":
			output := sha256.Sum256([]byte(*value))
			fmt.Printf("action: %s %x \n", *action, output)
			return
		case "sha384":
			output := sha3.Sum384([]byte(*value))
			fmt.Printf("action: %s %x \n", *action, output)
			fmt.Println("")
			return
		case "sha512":
			output := sha3.Sum512([]byte(*value))
			fmt.Printf("action: %s %x \n", *action, output)
			return
		default:
			fmt.Println("error")
	}
}