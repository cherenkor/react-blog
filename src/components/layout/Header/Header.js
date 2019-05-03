import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

export default function AHeader () {
    return (
        <React.Fragment>
            <header>
                <h1>React Blog</h1>
            </header>
            <div className="menu">
                    <ul>
                        <li>
                            <NavLink tag="li" to="/" exact activeClassName="menu-item-active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink tag="li" to="/about" activeClassName="menu-item-active">About</NavLink>
                        </li>
                        <li>
                            <NavLink tag="li" to="/login" activeClassName="menu-item-active">Login</NavLink>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
};