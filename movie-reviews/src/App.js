
import React, { Component } from "react";
import './App.css';

import Home from './pages/home';
import NotFoundPage from './pages/404';
import Reviews from './pages/reviews';
import LeaveReview from './pages/leavereview';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";



function App(){
    return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/reviews" element={<Reviews/>}/>
          <Route exact path="/leavereview" element={<LeaveReview/>}/>
      </Routes>
      </div>
    );
  }

export default App;



