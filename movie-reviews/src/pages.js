import React, { useEffect } from "react";
import {Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div><h3>Resource not found at {location.pathname}!</h3></div>
    );
};

export function Home(props){
    let movieList=[];
    useEffect( () => {
        console.log(props.movies);}, [movieList]);

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

    if(props.movies){
    return (
        <div id="align-content-*-center">
            <h1>MOVIE REVIEWS</h1>
            <hr></hr>
            <ul style={{listStyleType: "none", textAlign: "center"  }}>
            {props.movies.map(movie=> ( 
            <>
                <li key={movie.title}><h3>{movie.title}</h3></li>
                <li key={movie.release}>Release: {movie.release}</li>
                <li key={movie.actors}>Actors: {movie.actors}</li>
                <li key={movie.rating}>Rating: {movie.rating}/5</li>
                <img src={movie.image} alt="movie poster"></img><br /><br />
                <button onClick={removeMovie} name={movie.title}>Remove Movie</button>               
            <hr></hr>
            </>
            ))}
            </ul>
        </div>
    )};
        return (
            <p>NO MOVIES AVAILABLE!</p>
        );
    };
    
export function LeaveReview(props){
    const [inputs, setInputs] = useState({});
    const [movieList, setMovieList] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value})); 
    }

    const handleSubmit = (event) => {
        if(props.movies){
            event.preventDefault();
            props.movies.push(inputs);
            console.log(props.movies);
            alert("Movie Review has been added successfully!");
            setInputs({});
        } 
        else {
            event.preventDefault();
            console.log(inputs);
            movieList.push(inputs);
            props.setMovies(movieList);
            alert("Movie Review has been added successfully!");
            setInputs({});
        }       
    }

    return (
        <div><h1>LEAVE REVIEW</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <label>Title:<input className="input-group" type="text" name="title" value={inputs.title || ""} onChange={handleChange}/></label><br />
                <label>Release:<input className="input-group" type="text" name="release" value={inputs.release || ""} onChange={handleChange}/></label><br />
                <label>Actors:<input className="input-group" type="text" name="actors" value={inputs.actors || ""} onChange={handleChange}/></label><br />
                <label>Rating:<input className="input-group" type="number" max="5" min="0"  name="rating" value={inputs.rating || ""} onChange={handleChange}/></label><br />
                <select name="image" className="drop-down" value={inputs.image || ""} onChange={handleChange}>
                    <option defaultValue="" value="">Select Movie Image</option>
                    <option value='/movieImages/generic.jpeg'> Other</option>
                    <option value='/movieImages/forrestgump.jpeg'>Forrest Gump</option>
                    <option value='/movieImages/inception.jpeg'>Inception</option>
                    <option value='/movieImages/lambs.jpeg'>Silence of the Lambs</option>
                    <option value='/movieImages/shawshank.jpg'>The Shawshank Redemption</option>
                    <option value='/movieImages/darkknight.jpg'>The Dark Knight</option>
                    <option value='/movieImages/godfather.jpg'>The Godfather</option>
                    <option value='/movieImages/fightclub.jpg'>Fight Club</option>                   
                </select><br /><br />
                <input className="btn-primary" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
        
    );
};

export function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/leavereview" >Leave Review</Link>
        </nav>
      </div>
    );
  };








