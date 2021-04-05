import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SuperiorBar = () => (
    <nav className="main-nav">
        <Link to="/" >
            <h1 className="text-bar">Bootcamp DevSuperior</h1>
        </Link>
    </nav>
);

export default SuperiorBar;