import React from 'react';
import { Link } from '@reach/router'

const NavBar = () => {
    return (
        (
            <nav className="navbar">
                <Link to='/'><button className="button">Home</button></Link>
                <Link to='/articles'><button className="button">All Articles</button></Link>
                <Link to='/articles/topic/cooking'><button className="button" >Cooking</button></Link>
                <Link to='/articles/topic/football'><button className="button">Football</button></Link>
                <Link to='/articles/topic/coding'><button className="button">Coding</button></Link>
            </nav>
        )
    );
};

export default NavBar;