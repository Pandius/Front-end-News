import React from 'react';
import { Link } from '@reach/router'
import NavBar from './NavBar';



const Header = (props) => {
    return (
        <div className="header">
            <Link to='/'>
                <h1>
                    The NC News
            </h1>
            </Link>
            <h3> Logged In: {props.userLoggedIn}</h3>
            <NavBar />
        </div>
    );
};

export default Header;