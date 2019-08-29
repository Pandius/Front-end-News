import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
    return (
        <div className="header">
            <Link to='/articles'>
                <header >The Nc News</header></Link>
        </div>

    )
}

export default Header;