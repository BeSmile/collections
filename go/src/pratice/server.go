package main

import (
    "net/http"
    "html/template"
    "os"
    "fmt"
    "github.com/russross/blackfriday"
)

type Todo struct {
	Title string
	Done  bool
}

type TodoPageData struct {
	PageTitle template.HTML
	Todos     []Todo
}

var templates = template.Must(template.ParseGlob("./html/*"))

func main() {
    f, err := os.Open("./html/test.md")
    if err != nil {
        fmt.Println(err)
        return 
    }   
    defer f.Close()

    out := make([]byte, 32*1024)
    output, err1  := f.Read(out)
    if err1 != nil {
        fmt.Println(err1)
        return 
    }   
    // tmpl := template.Must(template.ParseFiles("./html/layout.html"))
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        data := TodoPageData{
            PageTitle:  template.HTML(string(blackfriday.MarkdownCommon(out[:output]))),
            Todos: []Todo{
                {Title: "<div>324</div>", Done: false},
                {Title: "Task 2", Done: true},
                {Title: "Task 3", Done: true},
            },
        }
        templates.ExecuteTemplate(w, "layout.html", data)
    })
    http.ListenAndServe(":8085", nil)
}