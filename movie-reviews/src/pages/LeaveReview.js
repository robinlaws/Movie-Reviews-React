import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { useForm } from "react-hook-form";

export function LeaveReview(props){
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    useEffect(() => {
            reset({title: "", release: "", actors: "", rating: ""})
        }, [success]);

    const movies = props.movies;
    const setMovies = props.setMovies;

    const createMovie = (data) => {
        setSuccess(true);
        Axios.post("http://localhost:8000/api/createMovie", {title: data.title, release: data.release, actors: data.actors, rating: data.rating, image: data.image}).then((response) => {
          setMovies([...movies, {title: data.title, release: data.release, actors: data.actors, rating: data.rating, image: data.image}])
        });
        alert("Movie has been added successfully!");
        props.setUpdate(true);
      };
      return (
        <div className="container">
            <h1><strong>LEAVE A REVIEW</strong></h1>
            <div className="formContainer">
            <form onSubmit={handleSubmit(createMovie)}>
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
                    <label>SELECT IMAGE:</label><br/>
                    <select className="drop-down" {...register("image")}>
                        <option className="selection" defaultValue="" disabled selected></option>
                        <option value='/movieImages/generic.jpeg'>Other</option>
                        <option value='/movieImages/forrestgump.jpeg'>Forrest Gump</option>
                        <option value='/movieImages/inception.jpeg'>Inception</option>
                        <option value='/movieImages/lambs.jpeg'>Silence of the Lambs</option>
                        <option value='/movieImages/shawshank.jpg'>The Shawshank Redemption</option>
                        <option value='/movieImages/darkknight.jpg'>The Dark Knight</option>
                        <option value='/movieImages/godfather.jpg'>The Godfather</option>
                        <option value='/movieImages/fightclub.jpg'>Fight Club</option>   
                    </select><br/><br/>
                    <input className="btn-primary" type="submit" />
                </form>
            </div>
        </div>
        )};
