import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function CommonLayout({ children }) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='p-4 sm:ml-64'>
                <div className='p-4 rounded-lg mt-14'>
                    {children}
                </div>
            </div>
        </>
    )
}
