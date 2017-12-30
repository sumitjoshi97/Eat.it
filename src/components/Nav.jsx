import React from 'react';
import {Link} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

const Nav = () => {
    return (
            <nav>
                <ul className="NavBar">
                    <li><Link to="/" id="home">Home</Link></li>
                    <li><Scrollchor to="#about">About</Scrollchor></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    )
}

export default Nav;