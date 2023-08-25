import loginApi from '@/api/endpoints/login';
import Button from '@/components/Button';
import Input from '@/components/Input'
import Modal from '@/components/Modal';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleFormValues = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = loginApi.login;
        const headers = {
            'Accept': 'application/json'
        };
        try {
            const response = await axios.post(login, formValues, { headers });
            localStorage.setItem('csrf_token', response.data.token);
            if (response.status === 200) {
                if (
                    response.data.token &&
                    (response.data.user_type === 'super admin' ||
                        response.data.user_type === 'admin' ||
                        response.data.user_type === 'user')
                ) {
                    router.push('/home');
                } else {
                    router.push('/login');
                }
            }
        } catch (error) {
            setShowModal(true);
        }
    };

    useEffect(() => {
        const isAuthenticated = !!localStorage.getItem('csrf_token');
        if (isAuthenticated) {
            router.push('/home');
        }
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className='p-20 md:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px] bg-white rounded-2xl' method='POST'>
                <div className='mb-6'>

                    {showModal && (
                        <>
                            <Modal
                                message={'Unauthorized user detected'}
                                onClose={handleModalClose}
                            />
                        </>
                    )}

                    <label htmlFor="email" className='block text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                    <Input
                        type='email'
                        name='email'
                        onChange={handleFormValues}
                        id='email'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                    <Input
                        type='password'
                        name='password'
                        onChange={handleFormValues}
                        id='password'
                    />
                </div>

                <div className="text-center">
                    <Button
                        type='submit'
                        value='Login'
                        customClass='bg-blue-500 hover:bg-blue-700 text-white mt-5 text-2xl'
                    />
                </div>

                <div className="text-center mt-4">
                    <span>
                        {`Don't have an account?`}
                    </span>
                </div>

                <div className="text-center">
                    <Link href='/register' className='font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline'>Register Now!</Link>
                </div>
            </form>
        </>
    )
}
