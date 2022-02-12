package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"main.go/controller"
	"main.go/database"
	"main.go/structdata"
)
func main(){
	Indb()
	log.Println("Starting The Http Server on port 8090")
	router:=mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/create",controller.CreateCategory).Methods("Post")
	router.HandleFunc("/get/{id}",controller.GetCategoryById).Methods("Get")
	router.HandleFunc("/update/{id}",controller.UpdateCategoryById).Methods("PUT")
	router.HandleFunc("/delete/{id}",controller.DeletePersonById).Methods("DELETE")
	
	log.Fatal(http.ListenAndServe(":8090",router))
}

func Indb() {
	config:=
		database.Config{
			ServerName: "localhost:3306",
			User:       "root",
			Password:   "Thilina1999@",
			DB:         "test3",
		}
		connectionString:=database.GetConnectionString(config)
		err:=database.Connect(connectionString)
		if err !=nil{
			panic(err.Error())
		}
		database.Migrate(&structdata.Addproduct{})
	}