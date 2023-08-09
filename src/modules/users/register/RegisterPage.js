import Input from '@/components/Input'
import React, { useState } from 'react'
import Button from '@/components/Button';

export default function RegisterPage() {

    // User data to be stored
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const [passwordMismatch, setpasswordMismatch] = useState(false)

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

    const handleSubmit = () => {
        // Check if any of the fields are empty (not filled)
        if (!name || !username || !email || !password || !confirmPassword) {
            setNameError(true);
            setUsernameError(true);
            setEmailError(true);
            setPasswordError(true);
            setConfirmPasswordError(true);
        }
        
        else if (name) {
            setNameError(false);
        }
        
        else if (username) {
            setUsernameError(false);
        }

        else if (email) {
            setEmailError(false);
        }
        
        else if (password) {
            setPasswordError(false);
        } 
        
        else if (confirmPassword) {
            setConfirmPasswordError(false);
        } 
        
        else if (password != confirmPassword) {
            setpasswordMismatch(true)
        }

        else if (password == confirmPassword) {
            setpasswordMismatch(false)
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
                                nameError && (
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
                                usernameError && (
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
                                emailError && (
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
                                passwordError && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Please enter a password*</span>
                                    </>
                                )
                            }
                            {
                                passwordMismatch && (
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
                                confirmPasswordError && (
                                    <>
                                        <span className="text-red-600 float-left font-bold font-sans">
                                            {confirmPassword.length === 0 ? 'Please confirm your password*' : ''}
                                        </span>
                                    </>
                                )
                            }

                            {
                                passwordMismatch && (
                                    <>
                                        <span className='text-red-600 float-left font-bold font-sans'>Passwords did not match*</span>
                                    </>
                                )
                            }
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
