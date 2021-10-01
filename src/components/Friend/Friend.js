import { buildQueries } from '@testing-library/dom';
import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Friend = (props) => {
const {id, name, phone, website, address} = props.friend;
const friendstyle = {
    border: '4px solid blue',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: 'pink'
}   
const url = `/friend/${id}`;
return (
        <div style={friendstyle}>
            <h1>I am : {name}</h1>
            <h4>Call me : {phone}</h4>
            <p>Visit me : {website}</p>
            <p>Live in : {address.city}</p>
            <Link to={url}>visit</Link>
        </div>
    );
};

export default Friend;