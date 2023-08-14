'use client'

import usersApi from '@/api/endpoints/users';
import Input from '@/components/Input';
import Label from '@/components/Label';
import React, { useEffect, useState } from 'react';

const EditUserPage = ({ params }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [bussinessSolution, setBussinessSolution] = useState('');

    useEffect(() => {
        fetch(usersApi.editUsers(params.id))
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setName(data.name);
                setUserName(data.username);
                setEmail(data.email);
                setAddress(user.address.street);
                setSuite(user.address.suite);
                setCity(user.address.city);
                setZipCode(user.address.zipcode);
                setPhone(user.phone);
                setWebsite(user.website);
                setCompany(user.company.name);
                setBussinessSolution(user.company.bs);
            })
            .catch(error => console.error(error));
    }, [params.id]);


    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleSuiteChange = (event) => {
        setSuite(event.target.value);
    }

    const handleCityChange = (event) => {
        setName(event.target.value);
    }

    const handleZipCodeChange = (event) => {
        setCity(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    }

    const handleCompanyNameChange = (event) => {
        setCompany(event.target.value);
    }

    const handleBusinessSolutionChange = (event) => {
        setBussinessSolution(event.target.value);
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
                                    onChange={handleNameChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Username" label="Username" />
                                <Input
                                    type="text"
                                    name="username"
                                    id="Username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Email" label="Email" />
                                <Input
                                    type="email"
                                    name="email"
                                    id="Email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Password" label="Password" />
                                <Input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="Password"
                                    value=''
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Address" label="Address" />
                                <Input
                                    type="text"
                                    name="address"
                                    id="Address"
                                    placeholder="Address"
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Suite" label="Suite" />
                                <Input
                                    type="text"
                                    name="suite"
                                    id="Suite"
                                    placeholder="Suite"
                                    value={suite}
                                    onChange={handleSuiteChange}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="City" label="City" />
                                <Input
                                    type="text"
                                    name="city"
                                    id="City"
                                    placeholder="City"
                                    value={city}
                                    onChange={handleCityChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Zip Code" label="Zip Code" />
                                <Input
                                    type="text"
                                    name="zipcode"
                                    id="Zip Code"
                                    placeholder="Zip Code"
                                    value={zipcode}
                                    onChange={handleZipCodeChange}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Phone" label="Phone" />
                                <Input
                                    type="text"
                                    name="phone"
                                    id="Phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Website" label="Website" />
                                <Input
                                    type="text"
                                    name="website"
                                    id="Website"
                                    placeholder="Website"
                                    value={website}
                                    onChange={handleWebsiteChange}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Company Name" label="Company Name" />
                                <Input
                                    type="text"
                                    name="company_name"
                                    id="Company Name"
                                    placeholder="Company Name"
                                    value={company}
                                    onChange={handleCompanyNameChange}
                                />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Label htmlFor="Bussiness Solution" label="Bussiness Solution" />
                                <Input
                                    type="text"
                                    name="bussiness_solution"
                                    id="Bussiness Solution"
                                    placeholder="Bussiness Solution"
                                    value={bussinessSolution}
                                    onChange={handleBusinessSolutionChange}
                                />
                            </div>
                        </div>
                    </>
                )
                    :
                    (<p>Loading user data...</p>)
            }
        </>
    );
};

export default EditUserPage;
