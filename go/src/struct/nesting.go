package main

import "fmt"

type Point struct {
	X, Y int
}
type Circle struct {
	Center Point
	Radius int
}
type Wheel struct {
	Circle Circle
	Spokes int
}

func main() {
	var w Wheel

	w = Wheel{
		Circle: Circle{
			Center: Point{
				X: 10,
				Y: 10,
			},
		},
		Spokes: 10,
	}
	w.Circle.Center.X = 12
	fmt.Printf("%#v\n", w)

}
