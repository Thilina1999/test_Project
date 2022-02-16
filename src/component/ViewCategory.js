
import React, {useEffect, useState} from "react";
import axios from "axios";

const ViewCategory=()=>{
    const[categories, setCategories]=useState([]);

    useEffect(()=>{
        const GetCategories=()=>{
            axios.get("http://localhost:8090/get").then((res)=>{
               
                setCategories(res.data);
            }).catch((err)=>{
                alert(err.messagge)
            })
        }
        GetCategories();
    },[])

    return(
        <div>Fuck you</div>
    )
}
export default ViewCategory;