package controller

import (
	"encoding/json"

	"io/ioutil"
	"log"

	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"main.go/database"
	"main.go/structdata"
)
var newcategories []structdata.Newcat

func CreateCategory(w http.ResponseWriter,r *http.Request){
	requestBody,_:=ioutil.ReadAll((r.Body))
	var category structdata.Addproduct
	json.Unmarshal(requestBody,&category)
database.GetDatabase().Create(&category)
w.Header().Set("Content-Type","application/json")
w.WriteHeader(http.StatusCreated)
json.NewEncoder(w).Encode(category)

}


func Newcraete(w http.ResponseWriter,r *http.Request){
	requestBody,_:=ioutil.ReadAll((r.Body))
	
	var cat structdata.Newcat
	json.Unmarshal(requestBody,&cat)
	database.GetDatabase().Create(&cat)
		_=json.NewDecoder(r.Body).Decode(&cat)
		cat.Id=strconv.Itoa(rand.Intn(1000000))
		newcategories = append(newcategories, cat)
		
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(cat)

}

func NewgetCategory(w http.ResponseWriter,r *http.Request){
	var newcat []structdata.Newcat
	database.GetDatabase().Find(&newcat)
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(newcat)
}

func NewgetByID(w http.ResponseWriter, r *http.Request){
	vars:= mux.Vars(r)
	key:=vars["id"]
	var newcate []structdata.Newcat

	database.GetDatabase().Find(&newcate)

	for _, item:= range newcate {
			
			
				if item.Id == key{
					w.Header().Set("Content-Type","application/json")
					json.NewEncoder(w).Encode(newcate)
					return
				
			}
	}
}




func GetCategory(w http.ResponseWriter,r *http.Request){
	category := []structdata.Addproduct{} 
	database.GetDatabase().Find(&category)
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(category)
}

func GetCategoryById(w http.ResponseWriter, r *http.Request){
	jer:=mux.Vars(r)
	key:=jer["id"]

	var category structdata.Addproduct //this should be add category
	database.GetDatabase().First(&category,key)
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(category)
}


func UpdateCategoryById(w http.ResponseWriter, r *http.Request){
	requestBody, _ := ioutil.ReadAll(r.Body)
	var category structdata.Addproduct
	json.Unmarshal(requestBody, &category)
	database.GetDatabase().Save(&category)

	w.Header().Set("Content-Type","application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(category)
}





func UpdateCategory(w http.ResponseWriter, r *http.Request){
	requestBody, _ := ioutil.ReadAll(r.Body)
	w.Header().Set("Content-Type","application/json")
	vars := mux.Vars(r)
	id := vars["Id"]
	
	categories:= []structdata.Addproduct{}
	
		key,err := strconv.Atoi(id)
		if err == nil {
			log.Println(key)
		}
		json.Unmarshal(requestBody, &categories)
		database.GetDatabase().Save(&categories)
	for i, item:= range categories {
		key,err := strconv.Atoi(id)
		
		if err==nil{
			if item.Id == key {
				categories = append(categories[:i],categories[i+1:]...)
				var categorie structdata.Addproduct
				_=json.NewDecoder(r.Body).Decode(&categorie)
				categorie.Id=key
				categories = append(categories, categorie)
				json.NewEncoder(w).Encode(categories)
				return
		}
	}
		}
		
json.NewEncoder(w).Encode(categories)

}







func DeletePersonById(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	key := vars["id"]

	var category structdata.Addproduct
	id, _ :=strconv.ParseInt(key, 10,64)
	database.GetDatabase().Where("id = ?", id).Delete(&category)
	w.WriteHeader(http.StatusNoContent)
}

