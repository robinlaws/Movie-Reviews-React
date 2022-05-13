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
        <div><h3>WELCOME TO OUR MOVIE REVIEW PAGE</h3>
        <ul style={{textAlign: "left" }}>
        {props.movies.map(movie => ( 
            <p>
          <li>{movie.title}</li>
          <li>{movie.release}</li>
          <li>{movie.actors}</li>
          <li>{movie.rating}</li>
        </p>
        ))}
      </ul>
        </div>
    );
};


export function LeaveReview(){
    return (
        <div><h3>LEAVE REVIEW</h3></div>
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