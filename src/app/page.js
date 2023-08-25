import LandingPage from '@/modules/landingPage/LandingPage'
import React from 'react'

export default function page() {
    return (
        <>
            <div class="h-40 bg-gradient-to-b from-indigo-300 to-purple-200 min-h-screen">
                <div className='p-8'>
                    <LandingPage />
                </div>
            </div>
        </>
    )
}
