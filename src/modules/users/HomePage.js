import Link from 'next/link'
import React from 'react'

export default function HomePage() {
    return (
        <>
            <div className='m-8'>
                <h1 className='text-6xl'>Home page</h1>
                <div className='mt-4'>
                    <Link href='/' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Landing Page</Link>
                    <Link href='/register' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Registration Page</Link>
                </div>
            </div>
        </>
    )
}
