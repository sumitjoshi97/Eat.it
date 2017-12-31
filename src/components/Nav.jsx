import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul className="NavBar">
                    <li><Link to="/" id="home">Home</Link></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/reserve">Reserve</Link></li>
                    <li><HashLink to="/#contact">Contact</HashLink></li>
                </ul>
            </nav>
        </div>
            

            
    )
}

export default Nav;