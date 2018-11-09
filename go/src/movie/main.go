package main

import (
	"fmt"
	"github.com/segmentio/objconv/json"
	"html/template"
	"log"
	"net/http"
	"os"
)

type Rating struct {
	Source		string
	Value		string
}

type Movie struct {
	Title 		string
	Year 		string
	Rated 		string
	Released 	string
	Runtime 	string
	Genre 		string
	Director 	string
	Writer 		string
	Actors 		string
	Plot 		string
	Country 	string
	Awards 		string
	Poster 		string
	Metascore 	string
	imdbRating 	string
	imdbVotes 	string
	imdbID 		string
	Type 		string
	DVD 		string
	BoxOffice 	string
	Production 	string
	Website 	string
	Response 	string
	Ratings		[] Rating
}

func SearchMovies(t string) (* Movie, error) {
	fmt.Printf("search title %s \n", t)
	resp, err := http.Get("http://www.omdbapi.com/" + "?apikey=7f29298d&t=" + t)

	if err != nil {
		log.Fatalf("search failed %s", err)
	}

	var movies  Movie
	//resp.Body is  ReadCloser;used NewDecoder
	if err := json.NewDecoder(resp.Body).Decode(&movies); err != nil {
		resp.Body.Close()
		return nil, err
	}
	//at last, should be close
	resp.Body.Close()
	return &movies, nil
}

var templ = `{{.Title}} view:
--------------------------------
Title: {{.Title}}
Year: {{.Year}}
`
var report = template.Must(template.New("movie").Parse(templ))

func main() {
	res, err := SearchMovies(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}
	if err := report.Execute(os.Stdout, res); err != nil {
		log.Fatal(err)
	}
	//fmt.Printf("%#v", res)

}
