import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Form, FormControl } from "react-bootstrap";

const UpdateCategory=()=>{
    const [id, setID] = useState(null);
    const [ category , setCategory] = useState("");
    let history = useNavigate();
    useEffect(()=>{
        setID(localStorage.getItem('Id'));
       setCategory(localStorage.getItem('Categories'));
    },[]);
    console.log(id,category)
    const UpdateApi=()=>{
        
        axios.put(`http://localhost:8090/update/{id}`,{
            id,
            category
        }).then(()=>{
            history.push("/get");
        })

    }
    
    return(
        <div>
            <Form className="container" onSubmit={UpdateApi()} >
                 <Form.Group className="mb-3" controlId="ControlInput1" name="catname">
                                                <Form.Label>Update Category</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Category Name" onChange={(e)=>{
                                                    setCategory(e.target.value)
                                                }}/>
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                                     Update
                                                 </Button>
            </Form>
            
        </div>
    )

    
}

export default UpdateCategory;