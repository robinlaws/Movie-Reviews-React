
import React from "react";
import './App.css';
import {Home, LeaveReview, NotFoundPage, Nav} from './pages';
import {Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';



function App(){
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect( () => {
    setLoading(true);
    fetch("/movies.json") 
    .then( response => response.json() ) 
    .then( setMovies )
    .then(() => setLoading(false))
    .then( console.log(movies))
    .catch( e => console.log(e.message) );
  },[]);


    if (loading) return <h1> Loading...</h1>;


  if(movies){
    return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home movies={movies}/>} />
          <Route exact path="/leavereview" element={<LeaveReview/>}/>
          <Route path="*" element={NotFoundPage}/>
      </Routes>
      </div>
    );
  }
}

export default App;



