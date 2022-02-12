package controller

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

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


func UpdateCategoryById(w http.ResponseWriter, r *http.Request){
	requestBody, _ := ioutil.ReadAll(r.Body)
	var category structdata.Addproduct
	json.Unmarshal(requestBody, &category)
	database.Connector.Save(&category)

	w.Header().Set("Content-Type","application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(category)
}

func DeletePersonById(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	key := vars["id"]

	var category structdata.Addproduct
	id, _ :=strconv.ParseInt(key, 10,64)
	database.Connector.Where("id = ?", id).Delete(&category)
	w.WriteHeader(http.StatusNoContent)
}