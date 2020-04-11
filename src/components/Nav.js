import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className="top-nav">
            <Link to="/" >Home</Link>
            <div className="right">
                <Link to="/plans" >Plans</Link>
                <Link to="/procedures">Procedures</Link>
            </div>
        </div>
    )
}

export default Nav;