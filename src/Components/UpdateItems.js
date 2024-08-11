import { useFormik } from "formik";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import * as Yup from "yup";
import {useState,useEffect} from "react";


function UpdateItems(){
    const{id}=useParams();
    const[item,setItem]=useState(null);


    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/item/${id}`)
        .then(response=>{
            setItem(response.data);
        })
        .catch(error=>{
            console.error("There was an error fetching the item data", error)
        })
    },[id])

    const formik = useFormik({
        initialValues: {
            image:item?.image ||"",
            name:item?.name ||"",
            price:item?.price ||"",
            id:item?.id ||"",
            description:item?.description ||""
        },
        enableReinitialization:true,
        validationSchema: Yup.object({
            image: Yup.string().required("Image URL is required"),
            name: Yup.string().min(5,"Name must be at least 5 characters").required("Name is required"),
            price: Yup.number().min(1,"Price must be greater than 0").required("Price is required"),
            id: Yup.number().required("id is required"),
            description: Yup.string().required("Description is required")
        }),
        onSubmit: (values , {setSubmitting, resetForm, setStatus})=>{
            axios.post("http://localhost:5000/item",values)
            .then (response => {
                setStatus("success");
                resetForm();
                navigate("/DisplayAllItem");
            })
            .catch (error=> {
                setStatus("error");
            })
            .finally(()=> {
                setSubmitting(false);
            });
        },
    });


    return (
        <div className="container mt-4">
            <h2>Update Item</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image url</label>
                    <input id="image" 
                    name="image" 
                    type="text" 
                    className="form-control" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.image}/>

                    {
                        formik.touched.image && formik.errors.image ?
                        (
                            <div className="text-danger">{formik.errors.image}</div>
                        ): null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" 
                    name="name" 
                    type="text" 
                    className="form-control" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.name}></input>
                    {
                        formik.touched.name && formik.errors.name ?
                        (
                            <div className="text-danger">{formik.errors.name}</div>
                        ): null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input id="price" 
                    name="price" 
                    type="number" 
                    className="form-control" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.price}></input>
                    {
                        formik.touched.price && formik.errors.price ?
                        (
                            <div className="text-danger">{formik.errors.price}</div>
                        ): null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="id" className="form-label">id</label>
                    <input id="id" 
                    name="id" 
                    type="number" 
                    className="form-control" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.id}></input>
                    {
                        formik.touched.id && formik.errors.id ?
                        (
                            <div className="text-danger">{formik.errors.id}</div>
                        ): null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description" 
                    name="description" 
                    type="text" 
                    className="form-control" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.description}></input>
                    {
                        formik.touched.description && formik.errors.description ?
                        (
                            <div className="text-danger">{formik.errors.description}</div>
                        ): null
                    }
                </div>
                <button type="submit" className="btn btn-primary">Done</button>
            </form>
        </div>
    )
}

export default UpdateItems;