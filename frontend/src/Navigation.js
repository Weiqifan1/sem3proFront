import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import apiFacade from './apiFacade';

const Navigation = () => {

    const userRole = apiFacade.getRole();

    return (
        <div>

            <ul className="header">
                
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                {(userRole === "user" || userRole === "admin") && <li><NavLink activeClassName="active" to="/about">About</NavLink></li>}
                {(userRole === "user" || userRole === "admin") && <li><NavLink activeClassName="active" to="/texts">Texts</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/users">Users</NavLink></li>}

            </ul>

        </div>
    );
}

export default Navigation;
