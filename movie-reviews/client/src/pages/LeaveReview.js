import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import Axios from "axios";
const FormData = require('form-data');

export function LeaveReview(props){

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    
    useEffect(() => {
            reset({title: "", release: "", actors: "", rating: ""});
        }, [success]);

    const onSubmit = (event) => {
        let image = event.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append("title", event.title);
        formData.append("release", event.release);
        formData.append("actors", event.actors);
        formData.append("rating", event.rating);
        formData.append("image", image);
        fetch("http://localhost:8000/api/createMovie", {
            method: "POST",
            body: formData,
        }).catch((error) => ("Something went wrong!", error))
        setSuccess(true);
        alert("Movie has been added successfully!");
      }
      return (
        <div className="container">
            <h1><strong>LEAVE A REVIEW</strong></h1>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="form-group">
                        <label>TITLE:</label>
                        <input className="input-group"{...register("title", {required: true, minLength: 4})} />
                         {errors.title && <span className="input-group-text">Please enter atleast 4 characters</span>}
                    </div>
                    <div className="form-group">
                        <label>RELEASE:</label>
                        <input className="input-group" {...register("release", {required: true, minLength: 4 })} />
                        {errors.release && <span className="input-group-text">Please enter atleast 4 characters</span>}
                    </div>
                    <div className="form-group">
                        <label>ACTORS:</label>
                        <input className="input-group" {...register("actors", {required: true, minLength: 10 })}/>
                        {errors.actors && <span className="input-group-text">Please enter atleast 10 characters</span>}
                    </div>
                    <div className="form-group">
                        <label>RATING:</label><br/>
                        <input style={{maxWidth:"100px" ,textAlign: "center"}}type="number"{...register("rating", {required: true, min: 0, max: 5 })}/>
                        {errors.rating && <span className="input-group-text">Rate from 0-5</span>}
                    </div>
                    <br></br>
                    <div>
			        <input id="imageFile" type="file" name="imageFile" single="true" {...register("image")}/> 
                    </div>
                    <input className="btn-primary" type="submit" />
                </form>
            </div>
        </div>
        )};
