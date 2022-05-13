
import React from "react";
import './App.css';

import {Home, LeaveReview, NotFoundPage, Nav} from './pages';
import {Routes, Route } from "react-router-dom";



function App(){
    return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/leavereview" element={<LeaveReview/>}/>
          <Route path="*" element={NotFoundPage}/>
      </Routes>
      </div>
    );
  }

export default App;



