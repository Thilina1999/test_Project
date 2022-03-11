import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import { GetCat } from "./ViewCategory";

const UpdateCategory = () => {
  const [id, setID] = useState("");
  const [category, setCategory] = useState("");
  const [redirect, setRedirect] = useState(false);

  const data1 = Number(localStorage.getItem("Id"));

  useEffect(() => {
    setID(data1);
    setCategory(localStorage.getItem("Categories"));
  }, []);

  const UpdateApi = () => {
    const updateData = {
      id,
      category,
    };

    axios
      .put(`http://localhost:8090/update/{id}`, updateData)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setRedirect(true);
  };
  // if(redirect){
  //     return <Navigate to="/viewCategory" />;

  // }
  const navigate = useNavigate();

  function delayRedirect(e, path) {
    e.preventDefault();

    // Do something..

    setTimeout(() => navigate(path), 300);
  }

  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="ControlInput3" name="category">
        <Form.Label>Update Category</Form.Label>

        <Form.Control
          type="text"
          placeholder="Enter the Category Name"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={UpdateApi}>
        <Link
          to="/viewCategory"
          onClick={(e) => delayRedirect(e, "/viewCategory")}
        >
          Submit
        </Link>
      </Button>
    </Form>
  );
};

export default UpdateCategory;
