import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style={
        fontWeight: 'bold',
        color: 'blue',
        fontSize: '20px',
        opacity: '0.6'
    }
    return (
        <nav>
    <NavLink activeStyle={style} to="/home">Home</NavLink>
    <NavLink activeStyle={style} to="/about">About</NavLink>
    <NavLink activeStyle={style} to="/friends">Friend</NavLink>
        </nav>
    );
};

export default Header;