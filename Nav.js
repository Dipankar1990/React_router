import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return ( 

        <nav className="router-nav">
            <ul>
                <li><NavLink exact activeClassName="active_class" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/contact/name">Name</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/header">Header</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/footer">Footer</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/user/dipankar/maity">User</NavLink></li>
            </ul>
        </nav>
    )
}
 
export default Nav;