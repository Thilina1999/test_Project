package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rs/cors"
	"main.go/controller"
	"main.go/database"
	"main.go/structdata"
)
func main(){
	Indb()
	log.Println("Starting The Http Server on port 8090")
	router:=mux.NewRouter().StrictSlash(true)
	

	router.HandleFunc("/create",controller.CreateCategory).Methods("POST")
	router.HandleFunc("/get/{id}",controller.GetCategoryById).Methods("Get")
	router.HandleFunc("/update/{id}",controller.UpdateCategoryById).Methods("PUT")
	router.HandleFunc("/delete/{id}",controller.DeletePersonById).Methods("DELETE")
	router.HandleFunc("/get",controller.GetCategory).Methods("GET")
	router.HandleFunc("/updated/{id}",controller.UpdateCategory).Methods("PUT")

	router.HandleFunc("/newcreate",controller.Newcraete).Methods("POST")
	router.HandleFunc("/newget",controller.NewgetCategory).Methods("GET")
	router.HandleFunc("/newget/{id}",controller.NewgetByID).Methods("GET")

	
	c:=cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc:  func(origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "HEAD", "OPTIONS","DELETE"},
		AllowedHeaders: []string{"*"},
		
	})

	handler:=c.Handler(router)
	log.Fatal(http.ListenAndServe(":8090",handler))


}

func Indb() {
	config:=
		database.Config{
			ServerName: "localhost:3306",
			User:       "root",
			Password:   "Thilina1999@",
			DB:         "test13",
		}
		connectionString:=database.GetConnectionString(config)
		
		err:=database.Connect(connectionString)
		if err !=nil{
			panic(err.Error())
		}
		database.Migrate(&structdata.Addproduct{})
		database.Migrate1(&structdata.Newcat{})
	}