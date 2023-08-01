import Input from '@/components/Input'
import React, { useState } from 'react'
import Button from '@/components/Button';
import Link from 'next/link';

export default function RegisterPage() {

    // User data to be stored
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [error, setError] = useState(false);
    const [errorValue, setErrorValue] = useState(false);

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

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

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
        // Required field regex pattern
        const requiredRegex = /^.+$/;

        // Check if any of the fields are empty (not filled)
        if (
            !requiredRegex.test(name) ||
            !requiredRegex.test(username) ||
            !requiredRegex.test(email) ||
            !requiredRegex.test(password)
        ) {
            setError(true);
            setErrorValue(false); // Reset the error for password mismatch
        } else if (password !== confirmPassword) {
            setErrorValue(true);
            setError(false);
        }

        else if (requiredRegex.test(name)) {
            setError(false);
        }

        else if (requiredRegex.test(name)) {
            setError(false);
        }

        else {
            setError(false);
            setErrorValue(false);
            alert('Form submitted');
        }
    };

    return (
        <>
            <form className='md:mx-[100px] lg:mx-[200px] xl:mx-[300px] rounded-2xl' method='POST'>
                <div className='bg-gray-300 rounded-md text-center'>
                    <div className='pt-6'>
                        <h1 className='text-2xl font-poppins'>Register Now!</h1>
                    </div>
                    <div className="grid grid-cols-1 p-10">
                        <div className="mb-6">
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                value={name}
                                onChange={handleName}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Name'
                            />
                            {
                                error && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Please enter your name*</span>
                                    </>
                                )
                            }
                        </div>

                        <div className="mb-6">
                            <Input
                                type='text'
                                name='username'
                                id='username'
                                value={username}
                                onChange={handleUsername}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Username'
                            />
                            {
                                error && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Please enter your username*</span>
                                    </>
                                )
                            }
                        </div>

                        <div className="mb-6">
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                value={email}
                                onChange={handleEmail}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Email'
                            />
                            {
                                error && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Please enter a valid email*</span>
                                    </>
                                )
                            }
                        </div>

                        <div className="mb-6">
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                value={password}
                                onChange={handlePassword}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Password'
                            />
                            {
                                error && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Please enter a password*</span>
                                    </>
                                )
                            }
                            {
                                errorValue && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Passwords did not match*</span>
                                    </>
                                )
                            }
                        </div>

                        <div className="">
                            <Input
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                customClass="w-full px-2 py-4 rounded-lg"
                                placeholder="Confirm Password"
                            />
                            {
                                error && (
                                    <>
                                        <span className="text-red-600 float-left font-bold font-sans">
                                            {confirmPassword.length === 0 ? 'Please confirm your password*' : ''}
                                        </span>
                                    </>
                                )
                            }

                            {
                                errorValue && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Passwords did not match*</span>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 px-10">
                        <div className="mb-6">
                            <Input
                                type='text'
                                name='street'
                                id='street'
                                value={street}
                                onChange={handleStreet}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Street'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='text'
                                name='suite'
                                id='suite'
                                value={suite}
                                onChange={handleSuite}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Suite'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='text'
                                name='latitude'
                                id='latitude'
                                value={latitude}
                                onChange={handleLatitude}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Latitude'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='text'
                                name='longitude'
                                id='longitude'
                                value={longitude}
                                onChange={handleLongitude}
                                customClass='w-full px-2 py-4 rounded-lg'
                                placeholder='Longitude'
                            />
                        </div>

                        <div className="mb-6">
                            <select name="city" id="city">
                                <option value="" selected disabled>Choose your City</option>
                                <option value="">City 1</option>
                                <option value="">City 2</option>
                                <option value="">City 3</option>
                                <option value="">City 4</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <select name="zip_code" id="zip_code">
                                <option value="" selected disabled>Zip code list</option>
                                <option value="">Zip code 1</option>
                                <option value="">Zip code 2</option>
                                <option value="">Zip code 3</option>
                                <option value="">Zip code 4</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            value="Apply for registration!"
                            customClass='text-2xl mb-6'
                        />
                    </div>
                </div>
            </form>
        </>
    )
}
