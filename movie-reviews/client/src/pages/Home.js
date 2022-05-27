import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import {Card, Button } from 'react-bootstrap'

export function Home(props){
    const removeMovie = async (event) => {
        const confirm = window.confirm("Are you sure you want to remove " + event.target.name + "?");
        if(confirm){
            const data = event.target.name;
            const options = {
                header: 'x-www-form-urlencoded'
            }
            const url = "/api/updateMovies";
            Axios.post(url, {title: data}, options).then ((response) => {
                console.log(response);
            });
            alert("Movie successfully deleted!")};
            await props.getMovies();      
    };

    const MovieCard = (movie) => {
        return(
            <div style = {{alignItems: "center", justifyContent: "center", width: "100%", height: "100%", display: "flex", padding: "10px"}}>
                <Card style={{ width: '50%', justifyContent:"center", alignItems: "center", padding: "auto", backgroundColor: "rgb(36, 35, 39 "}} id="align-content-*-center">
                    <Card.Body>
                        <Card.Title><h3>{movie.title}</h3></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Release: {movie.release}</Card.Subtitle>
                        <Card.Text>
                            <li id="card-text"><strong>Actors:</strong> {movie.actors}</li>
                            <li id="card-text"><strong>Rating:</strong> {movie.rating}/5</li>
                        </Card.Text>
                        <Card.Img src={"./movieImages/" + movie.image} alt="movie poster"/>
                        <br/><br/>
                        <Button onClick={removeMovie} name={movie.title}>Remove Movie</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    };
 
    if((props.movies).length > 0){
        return (
            <div className="container" style={{justifyContent: "center", alignItems: "center"}} id="align-content-*-center">
                <h1><strong>MOVIE REVIEWS</strong></h1>
                <hr></hr>
                <ul style={{listStyleType: "none", textAlign: "center"  }}>
                    {props.movies.map((movie, i)=> ( 
                        <div key={i}>
                            {MovieCard(movie)}
                            <hr></hr>
                        </div>
                    ))}
                    <br/><br/>
                </ul>
            </div>
        )
    };  
};
