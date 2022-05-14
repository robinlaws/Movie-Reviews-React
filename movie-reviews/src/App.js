
import React from "react";
import './App.css';
import {Home, LeaveReview, NotFoundPage, Nav} from './pages';
import {Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';



function App(){
  const [movies, setMovies] = useState(null);
  useEffect( () => {
    fetch("/movies.json") 
    .then( response => response.json() ) 
    .then( setMovies )
    .then( console.log(movies))
    .catch( e => console.log(e.message) );

  },[]);
  const movieObjects = [];

    if (movies != null || movies != undefined ){
      movieObjects.push(movies.map((movie, i) => {console.log(movie)}));
  };


    return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home movies={movieObjects}/>} />
          <Route exact path="/leavereview" element={<LeaveReview/>}/>
          <Route path="*" element={NotFoundPage}/>
      </Routes>
      </div>
    );
  }

export default App;



