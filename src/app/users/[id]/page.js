'use client'

import usersApi from '@/api/endpoints/users';
import React, { useEffect, useState } from 'react';

const EditUserPage = ({ params }) => {
    const [user, setUser] = useState(null); // State to hold user data
    useEffect(() => {
        // Make an API request to fetch user details based on the ID
        fetch(usersApi.editUsers(params.id))
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [params.id]);

    return (
        <div>
            {
                user ? (
                    <div>
                        <h1>Edit User</h1>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address.street}</p>
                        <p>Suite: {user.address.suite}</p>
                        <p>City: {user.address.city}</p>
                        <p>Zip Code: {user.address.zipcode}</p>
                        <p>Latitude: {user.address.geo.lat}</p>
                        <p>Longitude: {user.address.geo.lng}</p>
                        <p>Phone number: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Company: {user.company.name}</p>
                        <p>Catchphrase: {user.company.catchPhrase}</p>
                        <p>Business Solution: {user.company.bs}</p>
                    </div>
                )
                    :
                    (<p>Loading user data...</p>)
            }
        </div>
    );
};

export default EditUserPage;
