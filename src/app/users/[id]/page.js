'use client'

import usersApi from '@/api/endpoints/users';
import Input from '@/components/Input';
import Label from '@/components/Label';
import React, { useEffect, useState } from 'react';

const EditUserPage = ({ params }) => {
    const [user, setUser] = useState(null);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [, setPassword] = useState('');

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        fetch(usersApi.editUsers(params.id))
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setUser(data.data);
                setName(data.data.name);
                setEmail(data.data.email);
            })
            .catch(error => console.error(error));
    }, [params.id]);

    const handleFormChanges = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>

            <div className='mb-8'>
                <h1 className='text-4xl'>Update personal info</h1>
            </div>

            {
                user ? (
                    <>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Name" label="Name" />
                                <Input
                                    type="text"
                                    name="name"
                                    id="Name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleFormChanges}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Email" label="Email" />
                                <Input
                                    type="email"
                                    name="email"
                                    id="Email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleFormChanges}
                                />
                            </div>

                            {/* More fields will be added soon */}
                        </div>
                    </>
                )
                    :
                    (<p>Loading data...</p>)
            }
        </>
    );
};

export default EditUserPage;
