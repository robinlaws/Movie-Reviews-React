import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import './App.css';
import {Home} from "./pages/Home";
import { LeaveReview } from "./pages/LeaveReview";
import { NotFoundPage } from "./pages/NotFoundPage";
import {  Nav} from './components/nav.js';
import {  Footer } from './components/footer.js';
import {Routes, Route } from "react-router-dom";

function App() {

  const getMovies = () => {
    Axios.get("http://localhost:8000/api/getMovies").then((response) => {
      setMovieList(response.data);
  });
  }
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovies();
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
    <div className="App">
    <Nav />
      <Routes>
          <Route exact path="/" element={<Home movies={movieList} setMovies = {setMovieList} getMovies={getMovies} /> }/>
          <Route exact path="/leavereview" element={<LeaveReview movies={movieList} setMovies={setMovieList}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
