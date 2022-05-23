import React from "react";
import './App.css';
import {Home} from "./pages/Home";
import { LeaveReview } from "./pages/LeaveReview";
import { NotFoundPage } from "./pages/NotFoundPage";
import {  Nav} from './components/nav.js';
import {  Footer } from './components/footer.js';
import {Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App(){
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  
  //get data from moviesJSON.json
  useEffect( () => {
    const fetchData = async () => {
      const result = await fetch('/api/movies');
      const body = await result.json();
      console.log(body);
      setMovies(body);
    }
    fetchData();

    console.log(movies);
  },[]);

  //   fetch('/moviesJSON.json')
  //   .then( response => response.json() ) 
  //   .then( setMovies )
  //   .then(() => setLoading(false))
  //   .then( console.log(movies))
  //   .catch( e => console.log(e.message) );
  // },[]);

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



