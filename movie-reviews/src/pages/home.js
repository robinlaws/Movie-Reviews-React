import React from "react";
import movies from "./../movieImages/movies.jpg";

function Home(){
    return (
        <div><h3>WELCOME TO OUR MOVIE REVIEW PAGE</h3>
        <img src={movies}/>
        </div>
    );
};

export default Home;
