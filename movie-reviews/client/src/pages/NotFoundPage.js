import React from 'react';
import { useLocation } from "react-router-dom";

export function NotFoundPage(){
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h3>OOPS!</h3>
            <br/>
            <h4> Page at location: {location.pathname} does not exist</h4>
        </div>
    )};
