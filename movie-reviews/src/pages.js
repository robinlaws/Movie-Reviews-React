import App from "./App";
import {React, useState} from "react";
import {Link, useLocation } from 'react-router-dom';


export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div><h3>Resource not found at {location.pathname}!</h3></div>
    );
};

export function Home(){
    return (
<<<<<<< HEAD
        <div><h1>MOVIE REVIEWS</h1>
        <ul style={{textAlign: "left", listStyle: "none" }}>
        {props.movies.map(movie => ( 
            <p>
                <li><h2>{movie.title}</h2></li>
                <li>Release Date: {movie.release}</li>
                <li>Actors: {movie.actors}</li>
                <li>Rating: {movie.rating} /5</li>
                <img src={movie.image}></img>
                <hr></hr>  
            </p>  
        ))}

      </ul>
=======
        <div><h3>WELCOME TO OUR MOVIE REVIEW PAGE</h3>
        <h2>{movies.title}</h2>
>>>>>>> parent of a308df3 (display)
        </div>
    );
};


export function LeaveReview(props){

    return (
        <div><h1>LEAVE REVIEW</h1>
        <form>
            <label>Title:
                <input type="text"/>
            </label>
            <label>Release:
                <input type="text"/>
            </label>
            <label>Actors:
                <input type="text"/>
            </label>
            <label>Rating:
                <input type="number" min="0" max="5"/>
            </label>
            <input type="submit">Submit</input>
        </form>
        </div>    
    );



};

export function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/leavereview">Leave Review</Link>
        </nav>
      </div>
    );
  };






