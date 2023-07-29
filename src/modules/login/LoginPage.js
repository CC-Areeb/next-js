import loginApi from '@/api/endpoints/login';
import Button from '@/components/Button';
import Input from '@/components/Input'
import Modal from '@/components/Modal';
import useCsrfToken from '@/hooks/useCsrfToken';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginPage() {
    const csrfToken = useCsrfToken();

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModal = (event) => {
        setModal(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = loginApi.login;
        const headers = {
            'X-CSRF-TOKEN': csrfToken,
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
            <form onSubmit={handleSubmit} className='p-20 md:mx-[100px] lg:mx-[200px] xl:mx-[300px] 2xl:mx-[550px] mt-52 bg-slate-300' method='POST'>
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
                        required
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
                        required
                    />
                </div>

                <div className="text-center">
                    <Button
                        type='submit'
                        value='Register Now!'
                        customClass='mt-5 text-2xl'
                    />
                </div>
            </form>
        </>
    )
}
