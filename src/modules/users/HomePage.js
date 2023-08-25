import Content from '@/components/Content';
import React, { useState } from 'react';

function HomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Content />
        </>
    );
}

export default HomePage;
