import Content from '@/components/Content'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import React, { useState } from 'react'

export default function HomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState('Dashboard');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handlePageChange = (pageName) => {
        setActivePage(pageName);
    };

    return (
        <>
            <Navbar onClick={toggleSidebar} />
            <Sidebar activePage={activePage} isOpen={isSidebarOpen} />
            <Content />
        </>
    )
}
