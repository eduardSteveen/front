import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return ( 
        <nav className='nav'>
            <ul className='container flex'>
                <li><Link to='/'>Inicio</Link></li>
            </ul>
        </nav>
     );
}

export default Nav;