import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavSidebar extends Component {
    render() {
        return(
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/create">Create</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to="/">Study</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/browse">Browse</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


export default NavSidebar;