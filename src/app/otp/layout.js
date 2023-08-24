import NotUserLayout from '@/layouts/NotUserLayout'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <NotUserLayout>
                {children}
            </NotUserLayout>
        </>
    )
}