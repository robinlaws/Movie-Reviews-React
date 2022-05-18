import React, { useEffect, useState} from "react";
import {Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

//home element to display movie reviews
export function Home(props){
    let movieList=[];
    useEffect( () => {
        console.log(props.movies);}, [movieList]);

    //function to handle remove movie button
    const removeMovie = (event) => {
        const name = event.target.name;
        if(props.movies.length === 1){
            props.setMovies(null);
        }
        if(props.movies){
        props.movies.forEach(movie => {
            if (movie.title !== name){
                movieList.push(movie);
                props.setMovies(movieList);
            }});
        alert("Movie has been removed!")
    }}

    //home display html to be returned
    if(props.movies){
    return (
        <div className="container">
            <div style={{paddingBottom: "100px"}} id="align-content-*-center">
                <h1><strong>MOVIE REVIEWS</strong></h1>
                <hr></hr>
                <ul style={{listStyleType: "none", textAlign: "center"  }}>
                {props.movies.map(movie=> ( 
                    <>
                    <li key={movie.index}><h4><strong>{movie.title}</strong></h4></li>
                    <li key={movie.index}>Release: {movie.release}</li>
                    <li key={movie.index}>Actors: {movie.actors}</li>
                    <li key={movie.index}>Rating: {movie.rating}/5</li>
                    <img src={movie.image} alt="movie poster"></img><br /><br />
                    <button className= "btn-primary" onClick={removeMovie} name={movie.title}>Remove Movie</button>               
                    <hr></hr>
                    </>
                ))}
                </ul>
            </div>
        </div>
    )};
    
    //to be displayed if movie list is empty
    return (
        <p style={{paddingBottom: "500px"}}><h1>NO AVAILABLE MOVIE REVIEWS</h1></p>
    )};
    
//leave review page element
export function LeaveReview(props){
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    useEffect(() => {
            reset({title: "", release: "", actors: "", rating: ""})
        }, [success])

    //handles form submit and resets form
    const onSubmit = (data) => {
        setSuccess(true);
        if(props.movies){
            props.movies.push(data);
        } else {
            props.setMovies([data]);
        }
        alert("Movie review has been added!");
    }
    
    //leave review page html
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
                    <label>RELEASE:</label><input className="input-group"{...register("release", {required: true, minLength: 4 })} />
                    {errors.release && <span className="input-group-text">Please enter atleast 4 characters</span>}
                </div>
                <div class="form-group">
                    <label>ACTORS:</label><input className="input-group"{...register("actors", {required: true, minLength: 10 })} />
                    {errors.actors && <span className="input-group-text">Please enter atleast 10 characters</span>}
                </div>
                <div class="form-group">
                    <label>RATING:</label><br/><input style={{maxWidth:"100px" ,textAlign: "center"}}type="number" {...register("rating", {required: true, min: 0, max: 5 })} />
                    {errors.rating && <span className="input-group-text">Rate from 0-5</span>}
                </div>
                <br></br>
                <label>SELECT IMAGE:</label><br/>
                <select className="drop-down" {...register("image")}>
                    <option className="selection" value="" disabled selected></option>
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

//nav bar html 
export function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/leavereview" >Leave Review</Link>
        </nav>
      </div>
    )};

//footer html 
export function Footer() {
    return (
        <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Source code @ <a href="https://github.com/robinlaws/Movie-Reviews-React.git">Robin-Laws-Github</a></small>
            </div>
        </footer>
    )};

//page not found html
export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div><h3>OOPS!</h3><br/>
            <h4> Page at location: {location.pathname} does not exist</h4>
        </div>
    )};





