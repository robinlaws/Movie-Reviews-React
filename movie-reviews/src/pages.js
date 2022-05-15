import React, { useEffect } from "react";
import {Link, useLocation } from 'react-router-dom';
import { useState } from "react";


export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div><h3>Resource not found at {location.pathname}!</h3></div>
    );
};

export function Home(props){
    return (
        <div>
            <h1>MOVIE REVIEWS</h1>
            <ul style={{textAlign: "left", listStyleType: "none"  }}>
            {props.movies.map((movie, i) => ( 
            <section>
            <li key={i}><h3>{movie.title}</h3></li>
            <li>Release: {movie.release}</li>
            <li>Actors: {movie.actors}</li>
            <li>Rating: {movie.rating}/5</li>
            <img src={movie.image} alt="Movie Poster"></img>
            <hr></hr>
            </section>         
        ))}
      </ul>
</div>
    );
};

export function LeaveReview(props){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        console.log(inputs);        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.movies.push(inputs);
        console.log(props.movies);
        alert("Movie Submitted!");
    }

    return (
        <div><h1>LEAVE REVIEW</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:<input type="text" name="title" value={inputs.title || ""} onChange={handleChange}/></label>
                <label>Release:<input type="text" name="release" value={inputs.release || ""} onChange={handleChange}/></label>
                <label>Actors:<input type="text" name="actors" value={inputs.actors || ""} onChange={handleChange}/></label>
                <label>Rating:<input type="number" max="5" min="0"  name="rating" value={inputs.rating || ""} onChange={handleChange}/></label>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
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








