package main

import "fmt"

func main() {
	months := [...] string {
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
	}
	Q2 := months[2:3]
	summer := months[3:6]
	fmt.Println(Q2) // ["April" "May" "June"]
	fmt.Println(summer)
	summer = append(Q2, "234")
	fmt.Println(months)
}