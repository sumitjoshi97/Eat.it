import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Nav = () => {
    return (
            <nav>
                <ul className="NavBar">
                    <li><Link to="/" id="home">Home</Link></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    )
}

export default Nav;