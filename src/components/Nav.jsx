import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
            <nav>
                <ul className="NavBar">
                    <li><Link to="/" id="home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    )
}

export default Nav;