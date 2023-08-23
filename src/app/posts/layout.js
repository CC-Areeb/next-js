import CommonLayout from '@/layouts/CommonLayout'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <CommonLayout>
                {children}
            </CommonLayout>
        </>
    )
}