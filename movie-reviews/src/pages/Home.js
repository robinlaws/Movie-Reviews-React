import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//home element to display movie reviews
export function Home(props){
    return(
    <><h1>movies</h1></>)};
    // let movieList=[];
    // useEffect( () => {
    //     console.log(props.movies);}, [movieList]);

    // //function to handle remove movie button
    // const removeMovie = (event) => {
    //     const name = event.target.name;
    //     if(props.movies.length === 1){
    //         props.setMovies(null);
    //     }
    //     if(props.movies){
    //     props.movies.forEach(movie => {
    //         if (movie.title !== name){
    //             movieList.push(movie);
    //             props.setMovies(movieList);
    //         }});
    //     alert("Movie has been removed!")
    // }}

    // //home display html to be returned
    // if(props.movies){
    // return (
    //     <div className="container">
    //         <div style={{paddingBottom: "100px"}} id="align-content-*-center">
    //             <h1><strong>MOVIE REVIEWS</strong></h1>
    //             <hr></hr>
    //             <ul style={{listStyleType: "none", textAlign: "center"  }}>
    //             {props.movies.map(movie=> ( 
    //                 <>
    //                 <li key={movie.index}><h4><strong>{movie.title}</strong></h4></li>
    //                 <li key={movie.index}>Release: {movie.release}</li>
    //                 <li key={movie.index}>Actors: {movie.actors}</li>
    //                 <li key={movie.index}>Rating: {movie.rating}/5</li>
    //                 <img src={movie.image} alt="movie poster"></img><br /><br />
    //                 <button className= "btn-primary" onClick={removeMovie} name={movie.title}>Remove Movie</button>               
    //                 <hr></hr>
    //                 </>
    //             ))}
    //             </ul>
    //         </div>
    //     </div>
    // )};
    
    // //to be displayed if movie list is empty
    // return (
    //     <p style={{paddingBottom: "500px"}}><h1>NO AVAILABLE MOVIE REVIEWS</h1></p>
    // )};