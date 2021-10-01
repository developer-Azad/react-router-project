import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Fdetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>Friend details : {friendId}</h1>
            <h3>{friend.name}</h3>
            <h3>{friend.phone}</h3>
            <h5>{friend.website}</h5>
            <p>works at : {friend.company?.name}</p>
        </div>
    );
};

export default Fdetails;