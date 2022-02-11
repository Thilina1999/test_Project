package controller

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gorilla/mux"
	"main.go/database"
	"main.go/structdata"
)


func CreateCategory(w http.ResponseWriter,r *http.Request){
	requestBody,_:=ioutil.ReadAll((r.Body))
	var category structdata.Addproduct
	json.Unmarshal(requestBody,&category)
database.Connector.Create(category)
w.Header().Set("Content-Type","application/json")
w.WriteHeader(http.StatusCreated)
json.NewEncoder(w).Encode(category)

}

func GetCategoryById(w http.ResponseWriter, r *http.Request){
	jer:=mux.Vars(r)
	key:=jer["id"]

	var category structdata.Addproduct //this should be add category
	database.Connector.First(&category,key)
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(category)
}
