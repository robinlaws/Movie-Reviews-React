import React, { useState, useEffect } from "react";
import movieData from "./../components/data.json";

const movieObjects = movieData.map((movie, i) => ({id: i}))

function Reviews(){

        return (
            <div>
                <h3>REVIEWS</h3>
                <ul>
                {movieObjects.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
                </ul>
            </div>
            );
        }

export default Reviews;
