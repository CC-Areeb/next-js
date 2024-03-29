import Accodian from '@/components/Accodian'
import CommonLayout from '@/layouts/CommonLayout'
import React from 'react'

export default function About() {
    return (
        <>
            <div class="bg-gradient-to-r from-blue-200 min-h-screen">
                <div className='pt-32'>
                    <Accodian
                        title="What is Next.js?"
                        content="Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations."
                    />
                    <Accodian
                        title="What is Tailwindcss?"
                        content="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
                    />
                    <Accodian
                        title="What is Flowbite?"
                        content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
                    />
                </div>
            </div>
        </>
    )
}
