package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", homepage)

}

func homepage(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/base.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Home", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func branchapply(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/branchapply.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Apply for Branch", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func searchbranch(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/base.gohtml")

	if err != nil {
		log.Println(err)
	}

	ptmp.ParseFiles("wpage/branch.gohtml")

	data := struct {
		Title string
	} {
		Title : "Search for Branch", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func studentapply(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/studentapply.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Student Apply", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func result(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/result.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Student Result", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func jobgetters(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/govjobgetters.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Govt. Job Getters", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func gallery(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/gallery.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Gallery", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func aboutus(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/aboutus.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "About Us", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func contactus(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/contactus.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Contact Us", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func login(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/login.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Login", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func forgot(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/forgot.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Forgot Password", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func courselist(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/courselisting.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Course List", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func adminpanel(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/adminpanel.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Adminpanel", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func course(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/course.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "All Course", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}

func coursedetails(w http.ResponseWriter, r *http.Request) {
	ptmp, err :=template.ParseFiles("template/coursedetails.gohtml")

	if err != nil {
		log.Println(err)
	}

	data := struct {
		Title string
	} {
		Title : "Course Details", 
	}

	err= ptmp.Execute(w, data)
	log.Println(err)
}
