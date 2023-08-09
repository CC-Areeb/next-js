'use client'

import React, { useState } from 'react';

export default function Accordion({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-[50%] mx-auto border shadow-md'>
            <button
                type='button'
                className={`w-full text-left py-4 px-6 font-semibold border-b flex justify-between items-center ${isExpanded ? 'bg-blue-900 text-white' : 'bg-blue-500 text-white'}`}
                onClick={toggleAccordion}
            >
                <span>{title}</span>
                <span className='ml-auto transform transition-transform duration-300'>
                    {isExpanded ? (
                        <svg className='w-4 h-4 transform: rotate(180deg)' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 15l7-7 7 7'></path>
                        </svg>
                    ) : (
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                        </svg>
                    )}
                </span>
            </button>
            {isExpanded && (
                <div className='py-2 px-6'>{content}</div>
            )}
        </div>
    );
}
