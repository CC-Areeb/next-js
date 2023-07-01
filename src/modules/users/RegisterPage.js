import Button from '@/components/Button';
import Input from '@/components/Input'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function RegisterPage() {
    const router = useRouter();
    const route = (url) => {
        router.push(url);
    }

    const [name, setName] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleLandingPage = () => {
        route('/');
    }

    return (
        <>
            <div className='m-8'>
                <h1 className='my-4'>Register now!</h1>

                <label htmlFor="name" className='mx-3'>Name</label>
                <Input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={handleName}
                    customClass='border-2 border-black rounded-md'
                />
                <div className='mt-4'>
                    <Link href='/' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Landing Page</Link>
                    <Link href='/home' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Home page</Link>
                </div>

                <div className="mt-4">
                    <Button
                        onClick={handleLandingPage}
                        value='Landing Page'
                        customClass=''
                    />
                </div>
            </div>
        </>
    )
}
