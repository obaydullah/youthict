package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", homepage)

	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))
	http.ListenAndServe(":8080", nil)
}

func homepage(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/base.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Hello World!", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}