import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export function Home(props){
    const removeMovie = async (event) => {
       const movieTitle = event.target.name;
       props.setMovies(props.movies.filter(movie => movie.title !== movieTitle));
    }
    
    if(props.movies){
        return (
            <div className="container">
            <div style={{paddingBottom: "100px"}} id="align-content-*-center">
                <h1><strong>MOVIE REVIEWS</strong></h1>
                <hr></hr>
                <ul style={{listStyleType: "none", textAlign: "center"  }}>
                {props.movies.map((movie)=> ( 
                    <>
                    <li key={movie.index}><h4><strong>{movie.title}</strong></h4></li>
                    <li key={movie.index}>Release: {movie.release}</li>
                    <li key={movie.index}>Actors: {movie.actors}</li>
                    <li key={movie.index}>Rating: {movie.rating}/5</li>
                    <img key={movie.index} src={movie.image} alt="movie poster"></img><br /><br />
                    <button className= "btn-primary" onClick={removeMovie} name={movie.title}>Remove Movie</button>               
                    <hr></hr>
                    </>
                ))}
                </ul>
            </div>
        </div>
    )};

    return (
        <p style={{paddingBottom: "500px"}}><h1>NO AVAILABLE MOVIE REVIEWS</h1></p>
    )};
    
