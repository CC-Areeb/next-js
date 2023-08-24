import Input from '@/components/Input'
import React, { useState } from 'react'
import Button from '@/components/Button';
import Link from 'next/link';

export default function RegisterPage() {

    // User data to be stored
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleFormValues = (event) =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        alert("Ongoing process!");
    }

    return (
        <>
            <form className='md:mx-[100px] lg:mx-[200px] xl:mx-[300px] rounded-2xl' method='POST'>
                <div className='bg-white rounded-md text-center'>
                    <div className='pt-6'>
                        <h1 className='text-2xl font-poppins'>Register Now!</h1>
                    </div>
                    <div className="grid grid-cols-1 p-10">
                        <div className="mb-6">
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                onChange={handleFormValues}
                                customClass='w-full px-2 py-4'
                                placeholder='Name'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='text'
                                name='username'
                                id='username'
                                onChange={handleFormValues}
                                customClass='w-full px-2 py-4'
                                placeholder='Username'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                onChange={handleFormValues}
                                customClass='w-full px-2 py-4'
                                placeholder='Email'
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                onChange={handleFormValues}
                                customClass='w-full px-2 py-4'
                                placeholder='Password'
                            />
                        </div>

                        <div className="">
                            <Input
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                onChange={handleFormValues}
                                customClass="w-full px-2 py-4"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            value="Apply for registration!"
                            customClass='bg-blue-500 hover:bg-blue-700 text-white text-2xl mb-6'
                        />
                    </div>
                    <div className='pb-4 text-center'>
                        <span>
                            {`Don't have an account?`}
                        </span>
                        <Link href='/login' className='font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline'>Login</Link>
                    </div>
                </div>
            </form>
        </>
    )
}
