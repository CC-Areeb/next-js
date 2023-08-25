import LandingPage from '@/modules/landingPage/LandingPage'
import React from 'react'

export default function page() {
    return (
        <>
            <div class="bg-gradient-to-r from-blue-200 min-h-screen">
                <div className='p-8'>
                    <LandingPage />
                </div>
            </div>
        </>
    )
}
