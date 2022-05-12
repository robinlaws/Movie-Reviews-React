import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from "react-router-dom";


const movies = [
  "Titanic", "Lion King", "Gone With the Wind"
];

const Main = () => {
  return(
        <div>
            <h1>Welcome to Movie Reviews</h1>
        </div>
  );
};

const Reviews = () => {
  return(
        <div>
            <h1>Movie Reviews</h1>
        </div>
  );
};

const LeaveReview = () => {
  return(
        <div>
            <h1>Leave Review</h1>
        </div>
  );
};

//variables
const movieObjects = movies.map((movie, i) => ({id: i, title: movie}));

function App() {
  return (
    <div className ='App'>
      <Routes>
        <Route exact path = "/" component= {<Main />} />
        <Route exact path="/Reviews" component={<Reviews />} />
        <Route exact path="/LeaveReview" component={<LeaveReview />} />
      </Routes>
    </div>
  );
}

export default App;