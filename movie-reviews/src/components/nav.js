import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/leavereview">Leave Review</Link>
        </nav>
      </div>
    );
  };

export default Nav;