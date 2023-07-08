import Input from '@/components/Input'
import React, { useState } from 'react'
import registerStyles from './register.module.css';
import Button from '@/components/Button';
import Link from 'next/link';

export default function RegisterPage() {

    // User data to be stored
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleStreet = (event) => {
        setStreet(event.target.value);
    }

    const handleSuite = (event) => {
        setSuite(event.target.value);
    }

    const handleCity = (event) => {
        setCity(event.target.value);
    }

    const handleZipCode = (event) => {
        setZipCode(event.target.value);
    }

    const handleLatitude = (event) => {
        setLatitude(event.target.value);
    }

    const handleLongitude = (event) => {
        setLongitude(event.target.value);
    }

    const handleSubmit = () => {
        // cannot be left empty
        if (name.length < 1 || username.length < 1 || email.length < 1 || password.length < 1) {
            alert('Error');
        }
        else {
            alert('form submitted');
        }
    }

    return (
        <>
            <div className='min-h-screen bg-teal-900'>
                <div className='bg-slate-400 sticky mb-4'>
                    <nav>
                        <ul>
                            <li className='py-4'>
                                <Link href='/' className='transition ease-in-out hover:bg-blue-500 px-2 py-[18px] text-white'>Landing Page</Link>
                                <Link href='/home' className='transition ease-in-out hover:bg-blue-500 px-2 py-[18px] text-white'>Home page</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1 className='text-center text-4xl text-white font-serif'>Register now!</h1>
                <div className={`bg-gray-300 p-[5%] rounded-md ${registerStyles['main-register-container']}`}>

                    <div className="grid grid-cols-2">
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="name" className=''>Name</label>
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                value={name}
                                onChange={handleName}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="username" className=''>Username</label>
                            <Input
                                type='text'
                                name='username'
                                id='username'
                                value={username}
                                onChange={handleUsername}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="email" className=''>Email</label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                value={email}
                                onChange={handleEmail}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="password" className=''>Password</label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                value={password}
                                onChange={handlePassword}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="street" className=''>Street</label>
                            <Input
                                type='text'
                                name='street'
                                id='street'
                                value={street}
                                onChange={handleStreet}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="suite" className=''>Suite</label>
                            <Input
                                type='text'
                                name='suite'
                                id='suite'
                                value={suite}
                                onChange={handleSuite}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="city" className=''>City</label>
                            <select name="city" id="city">
                                <option value="" selected disabled>Choose your City</option>
                                <option value="">City 1</option>
                                <option value="">City 2</option>
                                <option value="">City 3</option>
                                <option value="">City 4</option>
                            </select>
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="zip_code" className=''>Zip Code</label>
                            <select name="zip_code" id="zip_code">
                                <option value="" selected disabled>Zip code list</option>
                                <option value="">Zip code 1</option>
                                <option value="">Zip code 2</option>
                                <option value="">Zip code 3</option>
                                <option value="">Zip code 4</option>
                            </select>
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="latitude" className=''>Latitude</label>
                            <Input
                                type='text'
                                name='latitude'
                                id='latitude'
                                value={latitude}
                                onChange={handleLatitude}
                                customClass=''
                            />
                        </div>

                        <div className="mb-4 flex flex-col">
                            <label htmlFor="longitude" className=''>Longitude</label>
                            <Input
                                type='text'
                                name='longitude'
                                id='longitude'
                                value={longitude}
                                onChange={handleLongitude}
                                customClass=''
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            value="Apply!"
                            customClass=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
