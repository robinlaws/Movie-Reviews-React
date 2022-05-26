import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
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
          <>
        <h1><strong>LEAVE A REVIEW</strong></h1><br/><br/>
        <div className="formContainer" >

            <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
                <Form.Group className="mb-3" controlId="title" >
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control type="text" {...register("title", {required: true, minLength: 4})}/>
                    {errors.title && <span className="input-group-text"  id="span">Please enter atleast 4 characters</span>}
                </Form.Group>      
                <Form.Group className="mb-3" controlId="release">
                    <Form.Label>RELEASE</Form.Label>          
                    <Form.Control type="text"  {...register("release", {required: true, minLength: 4 })}/>
                    {errors.release && <span className="input-group-text"  id="span">Please enter atleast 4 characters</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="actors" >
                    <Form.Label>ACTORS</Form.Label>
                    <Form.Control type="text"  {...register("actors", {required: true, minLength: 10 })}/>
                    {errors.actors && <span className="input-group-text" id="span">Please enter atleast 10 characters</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>RATING</Form.Label>
                    <Form.Control type="number"  style={{textAlign: "center"}} {...register("rating", {required: true, min: 0, max: 5 })}/>
                    {errors.rating && <span className="input-group-text"  id="span">Rate from 0-5</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="image" single="true" >
                    <Form.Label>UPLOAD IMAGE</Form.Label>
                    <Form.Control type="file" {...register("image")}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
      </div>
      </>
    )
}

