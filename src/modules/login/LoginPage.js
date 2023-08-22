import loginApi from '@/api/endpoints/login';
import Button from '@/components/Button';
import Input from '@/components/Input'
import Modal from '@/components/Modal';
import useCsrfToken from '@/hooks/useCsrfToken';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginPage() {
    const csrfToken = useCsrfToken();

    const router = useRouter();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleEmail = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = loginApi.login;
        const headers = {
            'X-CSRF-TOKEN': csrfToken,
            'Accept': 'application/json'
        };
        try {
            const response = await axios.post(login, { email, password }, { headers });
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
            if (error.response.status === 401) {
                setShowModal(true);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='p-20 md:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px] bg-slate-300 rounded-2xl' method='POST'>
                <div className='mb-6'>

                    {showModal && (
                        <>
                            <Modal
                                message={'Unauthorized user detected'}
                                onClose={handleModalClose}
                            />
                        </>
                    )}

                    <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                    <Input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleEmail}
                        customClass='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        id='email'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handlePassword}
                        customClass='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
