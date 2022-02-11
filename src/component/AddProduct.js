import React from "react";
import { Link } from "react-router-dom";
import {Nav,Tab,Tabs,Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

const AddProduct=()=>{
    return(
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Add Product
                        <Link to="/ViewProduct" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className="card-header">
                    
                             <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Home">
                                <div className="form-group mb-3">
                                    <label>Select Category</label>
                                    <select name="category_id" id="" className="form-control">
                                        <option value="">Select Category</option>
                                        <option value="">hello</option>
                                    </select>
                                         <Form>

                                                <Form.Group className="mb-3" controlId="ControlInput1" name="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Product Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" name="De3scription">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                                 </Form.Group>
                                                   <Button variant="primary" type="submit">
                                                                     Submit
                                                 </Button>
                                        </Form>
                                </div>
                                                   

  
                            </Tab>
                            <Tab eventKey="Seo_Tags" title="Seo Tags">
                                 <Form>

                                                <Form.Group className="mb-3" controlId="ControlInput2" name="Meta_Name">
                                                <Form.Label>Meta Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Product Name" />
                                                </Form.Group>
                                                   <Form.Group className="mb-3" controlId="ControlInput3" name="Meta_Keyword">
                                                <Form.Label>Meta Keyword</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Product Name" />
                                                </Form.Group>
                                                  <Form.Group className="mb-3" controlId="ControlTextarea1" name="meta_Description">
                                                <Form.Label>Meta Description</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                                 </Form.Group>
                                                <Button variant="primary" type="submit">
                                                 Submit
                                                </Button>
                                        </Form>
                            </Tab>
                             
                                  <Tab eventKey="Other_Detail" title="Other Detail" className="row">
                                      <Form encType="multipart/form-data  ">
                                           <Form.Group className="mb-3" controlId="ControlInput4" name="price">
                                                <Form.Label>Price</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Product Name" />
                                                </Form.Group>
                                            <Form.Group controlId="formFile" className="mb-4" name="image"> 
                                            <Form.Label>Default file input example</Form.Label>
                                            <Form.Control type="file" />
                                            </Form.Group>
                                            <div className="col-md-4 form-group mb-3">
                                                <label htmlFor="">Status(checked=Hidden)</label>
                                                <br />
                                                <input type="checkbox" name="status" className="form-check-input w-40 h-10"/>
                                            </div>
                                              <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                      </Form>
                                    
                            </Tab>
                                
                           
                            
                            
                            </Tabs>

                </div>
            </div>
        </div>
    )
}
export default AddProduct;