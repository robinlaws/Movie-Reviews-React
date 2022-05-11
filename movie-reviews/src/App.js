import React from 'react';
import './App.css';

function Header(props) {
  return(
    <header>
      <div className="topnav">
        <a className="active" href="reviews">Movie Reviews</a>
        <a href="user_review">Leave Review</a>
      </div>
      <h1>Movie Reviews</h1>
    </header>
  );
  }

  function Main(props) {
    return(
      <section>
        <ul style={{textAlign: "left"}}>
        {props.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </ul>
      </section>
    );
  }

  function Footer(props){
    return (
      <footer>
      <p>Copyright {props.year}</p>
      </footer>
    );
  }


const movies = [
  "Titanic", "Lion King", "Gone With the Wind"
];

//variables
const movieObjects = movies.map((movie, i) => ({id: i, title: movie}));

function App() {
  return (
    <div className="App">
      <Header />
      <Main movies = {movieObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;