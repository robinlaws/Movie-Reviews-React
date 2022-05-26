import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

export function Home(props){
    const removeMovie = async (event) => {
        const confirm = window.confirm("Are you sure you want to remove " + event.target.name + "?");
        if(confirm){
            const data = event.target.name;
            const options = {
                header: 'x-www-form-urlencoded'
            }
            const url = "http://localhost:8000/api/updateMovies";
            Axios.post(url, {title: data}, options).then ((response) => {
                console.log(response);
            });
            alert("Movie successfully deleted!")};
            await props.getMovies();      
    };
 
    if((props.movies).length > 0){
        return (
            <div className="container">
                <div style={{paddingBottom: "100px"}} id="align-content-*-center">
                    <h1><strong>MOVIE REVIEWS</strong></h1>
                    <hr></hr>
                    <ul style={{listStyleType: "none", textAlign: "center"  }}>
                    {props.movies.map((movie)=> ( 
                        <>
                            <li><h4><strong>{movie.title}</strong></h4></li>
                            <li>Release: {movie.release}</li>
                            <li>Actors: {movie.actors}</li>
                            <li>Rating: {movie.rating}/5</li>
                            <img src={"./movieImages/" + movie.image} alt="movie poster"></img><br /><br />
                            <button className= "btn-primary" onClick={removeMovie} name={movie.title}>Remove Movie</button>               
                            <hr></hr>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )};

    return (
        <div style={{paddingBottom: "550px"}}><h1>NO AVAILABLE MOVIE REVIEWS</h1></div>
    )};
    
