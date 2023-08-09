import Accodian from '@/components/Accodian'
import React from 'react'

export default function About() {
    return (
        <>
            <div className='mt-8'>
                <Accodian
                    title="What is Next.js?"
                    content="Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations."
                />
                <Accodian
                    title="What is Flowbite?"
                    content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
                />
            </div>
        </>
    )
}
