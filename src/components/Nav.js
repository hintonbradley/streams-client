import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.css';

const Nav = () => {
    return (
        <div className="top-nav">
            <Link to="/plans" >Plans</Link>
            <div className="right">
                <Link to="/procedures/setup" >Setup</Link>
                <Link to="/procedures/auth" >Authentication</Link>
                <Link to="/procedures/forms" >Forms</Link>
                <Link to="/procedures/rest"> REST</Link>
                <Link to="/procedures/portals"> Portals</Link>
            </div>
        </div>
    )
}

export default Nav;