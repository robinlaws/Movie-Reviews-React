import React from 'react';
import './App.css';

function Header(props) {
  return(
    <header>
      <h1>Movie Reviews</h1>
    </header>
  );
  }

  function Main() {
    return(
      <section>
        <h2>Movie reviews here</h2>
      </section>
    );
  }

  function Footer(){
    return (
      <footer>
      <p>Footer</p>
      </footer>
    );
  }

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
