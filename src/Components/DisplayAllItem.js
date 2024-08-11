import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function DisplayAllItem(){
    const [item , setItems]=useState([]);
    const navigate = useNavigate();

    useEffect (()=>{
        fetchItems();
    }, [])

    const fetchItems = ()=>{
        axios.get("http://localhost:5000/item")
           .then(response=>{
                setItems(response.data);
           })
           .catch(error=>{
               console.log("There was an error fetching the Pizza data", error);
           })
    } 
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/item/${id}`)
           .then(response=>{
            
                fetchItems();
           })
           .catch(error=>{
               console.error("There was an error fetching the flowers data", error);
           })
    }

    return (
        <>
        <div className="container mt-4">
            <h2>Pizza</h2>
            <div className="row">
                {item.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4">
                            <img src={item.image} height={300} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Price: Rs.{item.price}</p>
                                <p className="card-text">id: {item.id}</p>
                                <p className="card-text">Description: {item.description}</p>

                                <button className="btn btn-danger me-2" onClick={()=>handleDelete(item.id)}>Delete</button>
                                <button className="btn btn-warning" onClick={()=>navigate(`/UpdateItems/${item.id}`)}>Update</button>
                                
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    
        </>
    )
    
}
export default DisplayAllItem;

