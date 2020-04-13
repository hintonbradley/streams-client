import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="sub-nav ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    )
}

export default Header;