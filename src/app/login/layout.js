import React from 'react'

// grid content-center

export default function Layout({ children }) {

    const style = {
        backgroundImage: "url(' /images/login-bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <>
            <div className="h-screen grid content-center" style={style}>
                {children}
            </div>
        </>
    )
}
