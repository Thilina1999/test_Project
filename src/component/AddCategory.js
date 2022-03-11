import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import {Button } from "react-bootstrap";
import axios from "axios";






const AddCategory=()=>{

     let[id,setId]=useState("");
    let[category,setCatname]=useState("");
    
    
    const SendData=(e)=>{
        e.preventDefault();
        
        var addCategerytData = {
             id,
             category

        }
        
        console.log(id,category);
        console.log(typeof(addCategerytData.id));
        
        
        axios.post(`http://localhost:8090/create`,addCategerytData).then((res)=>{
            
            if(res.status === 200){
                alert("Category Add")
            }else{
                Promise.reject()
            }
            e.target.reset();
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
       <Form className="container" onSubmit={SendData}>
                                                    <Form.Group className="mb-3" controlId="ControlInput1" name="id">
                                                <Form.Label>ID</Form.Label>
                                                <Form.Control type="number" placeholder="Enter the Category Id" onChange={(e)=>{
                                                    setId(e.target.valueAsNumber);
                                                }} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="ControlInput2" name="catname">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Category Name" onChange={(e)=>{
                                                    setCatname(e.target.value)
                                                }}/>
                                                </Form.Group>

                                                   <Button variant="primary" type="submit">
                                                                     Submit
                                                 </Button>
                                        </Form>
    )
}
export default AddCategory;