import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <div className=''>
                <nav>
                    <ul>
                        <li>
                            <Link href='/' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Landing Page</Link>
                            <Link href='/home' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Home page</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {children}
        </>
    )
}