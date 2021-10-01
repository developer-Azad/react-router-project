import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
  
    return (
        <div>
            <h1>Here is our Friends : {users.length}</h1>
            <div className="friend-display">
            {
                users.map(friend => <Friend 
                    key={friend.id}
                    friend={friend}>
                                    </Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;