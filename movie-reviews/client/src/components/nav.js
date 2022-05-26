import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/leavereview" >Leave Review</Link>
        </nav>
      </div>
    )};
