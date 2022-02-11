import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import {Button } from "react-bootstrap";
import axios from "axios";






const AddCategory=()=>{

    const[id,setId]=useState("");
    const[catname,setCatname]=useState("");
    

    const sendData=(e)=>{
        e.preventDefault();
        
        const addCartData={
            id,
            catname

        }
        axios.post()

    }

    return(
       <Form className="container" onSubmit={sendData}>
                                                    <Form.Group className="mb-3" controlId="ControlInput1" name="id">
                                                <Form.Label>ID</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Category Id" onChange={(e)=>{
                                                    setId(e.target.value);
                                                }} />
                                                </Form.Group>
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