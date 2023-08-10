'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import usersApi from '@/api/endpoints/users';
import React, { useEffect, useState } from 'react';

const EditUserPage = () => {
    const searchParams = useSearchParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(usersApi.editUsers(`id`));
                const data = await response.json();
                console.log(data);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserData();
    }, [id]);

    return (
        <div>
            {userData ? (
                <>
                    <h1>Edit User: {userData.name}</h1>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default EditUserPage;
