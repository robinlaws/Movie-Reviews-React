import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import FileBase64 from 'react-file-base64';

export function LeaveReview(props){

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
            reset({title: "", release: "", actors: "", rating: ""})
        }, [success]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("imageFile", data.file[0]);
        formData.append("title", data.title);
        formData.append("release", data.release);
        formData.append("actors", data.actors);
        formData.append("rating", data.rating);
        const res = await ("http://localhost:8000/api/createMovie", {
            method: 'POST',
            body: formData
        }). then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    
      };
      return (
        <div className="container">
            <h1><strong>LEAVE A REVIEW</strong></h1>
            <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <label>TITLE:</label><input className="input-group"{...register("title", {required: true, minLength: 4})} />
                         {errors.title && <span className="input-group-text">Please enter atleast 4 characters</span>}
                    </div>
                    <div class="form-group">
                        <label>RELEASE:</label><input className="input-group" {...register("release", {required: true, minLength: 4 })} />
                        {errors.release && <span className="input-group-text">Please enter atleast 4 characters</span>}
                    </div>
                    <div class="form-group">
                        <label>ACTORS:</label><input className="input-group" {...register("actors", {required: true, minLength: 10 })}/>
                        {errors.actors && <span className="input-group-text">Please enter atleast 10 characters</span>}
                    </div>
                    <div class="form-group">
                        <label>RATING:</label><br/><input style={{maxWidth:"100px" ,textAlign: "center"}}type="number"{...register("rating", {required: true, min: 0, max: 5 })}/>
                        {errors.rating && <span className="input-group-text">Rate from 0-5</span>}
                    </div>
                    <br></br>
                    <div>
			        <input type="file" name="file"{...register("file")} /> 
		            <div>
				    <input type="submit">Submit</input>
		            </div>
                    </div>
                    <input className="btn-primary" type="submit" />
                </form>
            </div>
        </div>
        )};
