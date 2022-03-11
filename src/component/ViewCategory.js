
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Table,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import UpdateCategory from "./UpdateCategory";

const ViewCategory=()=>{
    
    const[categories, setCategories]=useState([]);
 const GetCat=()=>{
         useEffect(()=>{
             axios.get("http://localhost:8090/get").then((res)=>{
               
                setCategories(res.data);
                
                
            }).catch((err)=>{
                console.log(err);
            })
        
   },[]);
   
  }
  GetCat();
 
    const SetData=(data1,data2)=>{
      console.log(data1,data2);
      
      localStorage.setItem('Id',data1);
      localStorage.setItem('Categories',data2);
        
    }
    const OnDelete=(id)=>{
        axios.delete(`http://localhost:8090/delete/${id}`);
        window.location.reload(true);
    }
    

    return(

        <div className="container" >
          <Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>Id</th>
      <th>Category</th>
      <th>Update</th>
      <th>Delete</th>
        
    </tr>
  </thead>
  {categories.map((categories)=>{
      return(
    <React.Fragment key={categories.id}>

    
      <tbody>
        <tr>
      <td>{categories.id}</td>

      <td>{categories.category}</td> 
      <td>
        <Link to="/update">
        <Button size="sm" variant="outline-primary" onClick={()=>SetData(categories.id,categories.category)}>
            Update
        </Button>
        </Link>
        
      </td>
       <td>
        <Button size="sm" variant="outline-primary" onClick={() => OnDelete(categories.id)}>
            Delete
        </Button>
      </td>
    </tr>
      </tbody>
    
  </React.Fragment>
      )
      })}
  
</Table>
	</div>
    )
}
export default ViewCategory;