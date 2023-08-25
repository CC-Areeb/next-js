import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
    return (
        <>
            <div className="">
                <h1 className='text-6xl'>Landing Page</h1>
                <p className='mt-8 text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium dolor suscipit sapiente explicabo quidem perferendis accusantium minima quae. Minima repellat temporibus adipisci officiis neque veniam eum culpa sint facere consequuntur. Earum nam beatae, fuga pariatur odio et sequi temporibus dolor consequuntur modi! Sapiente sint neque vero eaque voluptas at?
                </p>
                <div className='mt-4'>
                    <Link href='/register' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Registration Now!</Link>
                    <Link href='/login' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>Login!</Link>
                    <Link href='/about' className='bg-blue-500 transition ease-in-out hover:bg-blue-800 mr-4 px-2 py-1 rounded text-white'>About us</Link>
                </div>
            </div>
        </>
    )
}
