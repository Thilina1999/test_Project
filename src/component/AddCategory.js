import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import {Button } from "react-bootstrap";
import axios from "axios";






const AddCategory=()=>{

    // const[id,setId]=useState("");
    const[category,setCatname]=useState("");
    

    const SendData=(e)=>{
        e.preventDefault();
        
        const addCategerytData={
            // id,
            category

        }
        
        axios.post(`http://localhost:8090/create`,addCategerytData).then(()=>{
            alert("Category Add")
            e.target.reset();
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
       <Form className="container" onSubmit={SendData}>
                                                    {/* <Form.Group className="mb-3" controlId="ControlInput1" name="id">
                                                <Form.Label>ID</Form.Label>
                                                <Form.Control type="number" placeholder="Enter the Category Id" onChange={(e)=>{
                                                    setId(e.target.value);
                                                }} />
                                                </Form.Group> */}
                                                <Form.Group className="mb-3" controlId="ControlInput1" name="catname">
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