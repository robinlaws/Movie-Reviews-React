import App from "./App";
import React from "react";
import {Link, useLocation } from 'react-router-dom';


export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div><h3>Resource not found at {location.pathname}!</h3></div>
    );
};

export function Home(props){
    return (
        <div><h1>MOVIE REVIEWS</h1>
        <ul style={{textAlign: "left", listStyleType: "none"  }}>
        {props.movies.map(movie => ( 
            <p>
          <li><h3>{movie.title}</h3></li>
          <li>Release: {movie.release}</li>
          <li>Actors: {movie.actors}</li>
          <li>Rating: {movie.rating}/5</li>
          <img src={movie.image}></img>
          <hr></hr>
        </p>
        ))}
      </ul>
        </div>
    );
};


export function LeaveReview(){
    return (
        <div><h1>LEAVE REVIEW</h1></div>
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