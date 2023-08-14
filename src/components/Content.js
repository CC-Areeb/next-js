'use client'

import React from 'react'
import Statboxes from './Statboxes'
import { useRouter } from 'next/navigation'

export default function Content() {
    const router = useRouter();

    const NavToUsers = () => {
        router.push('/users');
    }

    const NavToUserPosts = () => {
        router.push('/posts');
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-3 mb-4">
                <Statboxes
                    customClass='h-24 rounded bg-green-600 hover:bg-green-800 transition cursor-pointer'
                    statContent='Total Users'
                    onClick={NavToUsers}
                />
                <Statboxes
                    customClass='h-24 rounded bg-green-600 hover:bg-green-800 transition cursor-pointer'
                    statContent='User Posts'
                    onClick={NavToUserPosts}
                />
                <Statboxes
                    customClass='h-24 rounded bg-green-600 hover:bg-green-800 transition cursor-pointer'
                    statContent='Message Statistics'
                />
            </div>
            <Statboxes
                customClass='h-48 mb-4 rounded bg-cyan-600 hover:bg-cyan-900 transition cursor-pointer'
                statContent='Performance Metrics'
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
                <Statboxes
                    customClass='rounded h-28 bg-indigo-400 hover:bg-indigo-600 transition cursor-pointer'
                    statContent='Moderation Statistics'
                />
                <Statboxes
                    customClass='rounded h-28 bg-indigo-400 hover:bg-indigo-600 transition cursor-pointer'
                    statContent='Feature Usage'
                />
                <Statboxes
                    customClass='rounded h-28 bg-indigo-400 hover:bg-indigo-600 transition cursor-pointer'
                    statContent='Error and Issue Tracking'
                />
                <Statboxes
                    customClass='rounded h-28 bg-indigo-400 hover:bg-indigo-600 transition cursor-pointer'
                    statContent='Feedback and Surveys'
                />
            </div>
            <Statboxes
                customClass='h-48 mb-4 rounded bg-red-300 hover:bg-red-400 transition cursor-pointer'
                statContent='Conversion and Growth Metrics'
            />
            <div className="grid grid-cols-2 gap-4">
                <Statboxes
                    customClass='rounded bg-purple-400 h-28 hover:bg-purple-600 transition cursor-pointer'
                    statContent='Feedback and Surveys'
                />
                <Statboxes
                    customClass='rounded bg-purple-400 h-28 hover:bg-purple-600 transition cursor-pointer'
                    statContent='Security and Compliance'
                />
            </div>
        </>
    )
}
