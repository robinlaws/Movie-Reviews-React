import React from "react";
import './App.css';
import {Home, LeaveReview, NotFoundPage, Nav, Footer} from './pages';
import {Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App(){
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  
  //get data from movies.json
  useEffect( () => {
    setLoading(true);
    fetch("/movies.json")
    .then( response => response.json() ) 
    .then( setMovies )
    .then(() => setLoading(false))
    .then( console.log(movies))
    .catch( e => console.log(e.message) );
  },[]);

  if (loading) return <h1>Loading...</h1>;

  //display once data has loaded
  return (
    <>
    <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home movies={movies} setMovies={setMovies} />} />
          <Route exact path="/leavereview" element={<LeaveReview movies={movies} setMovies={setMovies}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App;



