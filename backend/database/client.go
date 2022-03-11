package database

import (
	"log"

	"github.com/jinzhu/gorm"
	"main.go/structdata"
)

var Connector *gorm.DB

func Connect(connectionString string)error{
	var err error
	Connector, err =gorm.Open("mysql", connectionString)
	if err !=nil{
		return err
	}
	log.Println("Connection was successfull")
	return nil
}

func Migrate(table *structdata.Addproduct ){
	Connector.AutoMigrate(&table)
	log.Println("Table migrated")
}
func Migrate1(table *structdata.Newcat ){
	Connector.AutoMigrate(&table)
	log.Println("Table Migrated")
}