import reactDom from "react-dom";
import React from "react";
import { Container, FormControl, Navbar, NavbarBrand ,Nav,NavDropdown ,Badge,Dropdown} from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Header=()=>{ 
    return(
   <Navbar bg="dark" variant="dark" style={{ height:80 }}> 
       <Container>
           <Navbar.Brand>
                <Link to="/home" className="me-4"  >Home</Link>
                <Link to="/cart" className="me-4">Shopping Cart</Link>
                <Link to="/addProduct" className="me-4">Add Product</Link>
                <Link to="/viewProduct" className="me-4">View Product</Link>
                <Link to="/addCategory" className="me-4">Add Category</Link>
                <Link to="/viewCategory" className="me-4">View Category</Link>
           </Navbar.Brand>
                <Navbar.Text className="search"> 
                <FormControl style={{width:500}} placeholder="search a Product"  className="m-auto"/>
                </Navbar.Text>
        <Nav className="">
       
        <Dropdown  alignlight='true'>
            <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge >
                    {10}
                </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minwidth:370}}>
                <span style={{padding:10}}>Cart is Empty</span>
            </Dropdown.Menu>

        </Dropdown>
      </Nav>
       </Container>
   </Navbar>
)}
export default Header;
