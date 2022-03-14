package database

import (
	"log"
	"fmt"
	"gorm.io/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"gorm.io/driver/mysql"
	"main.go/structdata"
)

// var Connector *gorm.DB

// func Connect(connectionString string)error{
// 	var err error
// 	Connector, err =gorm.Open("mysql", connectionString)
// 	if err !=nil{
// 		return err
// 	}
// 	log.Println("Connection was successfull")
// 	return nil
// }
// func Indb() {
// 	config:=
// 		Config{
// 			ServerName: "localhost:3306",
// 			User:       "root",
// 			Password:   "Thilina1999@",
// 			DB:         "test13",
// 		}
// 		connectionString:=GetConnectionString(config)
		
// 		err:=Connect(connectionString)
// 		if err !=nil{
// 			panic(err.Error())
// 		}
// 		Migrate(&structdata.Addproduct{})
// 		Migrate1(&structdata.Newcat{})
// 	}


// func Migrate1(table *structdata.Newcat ){
// 	Connector.AutoMigrate(&table)
// 	log.Println("Table Migrated")
// }
func GetDatabase() *gorm.DB {
	dsn := "root:Thilina1999@@tcp(127.0.0.1:3306)/test13?charset=utf8mb4&parseTime=True&loc=Local"

	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln("Invalid database url")
	}
	sqldb, _ := connection.DB()

	err = sqldb.Ping()
	if err != nil {
		log.Fatal("Database connected")
	}
	fmt.Println("Database connection successful.")
	return connection
}
func Migrate( ){
	connection:= GetDatabase()
	defer CloseDatabase(connection)
	connection.AutoMigrate(structdata.Addproduct{})
}
func CloseDatabase(connection *gorm.DB) {
	sqldb, _ := connection.DB()
	sqldb.Close()
}