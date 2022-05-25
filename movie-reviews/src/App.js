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

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:8000/api/getMovies").then((response) => {
      setMovieList(response.data);
    });
    setLoading(false);
  }, [update]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
    <div className="App">
    <Nav />
      <Routes>
          <Route exact path="/" element={<Home movies={movieList} setMovies = {setMovieList} /> }/>
          <Route exact path="/leavereview" element={<LeaveReview movies={movieList} setMovies={setMovieList}  update = {update} setUpdate = {setUpdate}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
