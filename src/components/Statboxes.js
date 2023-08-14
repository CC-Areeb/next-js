import React from 'react'

export default function Statboxes({ statContent, customClass, onClick }) {
    return (
        <>
            <div className={`flex items-center justify-center ${customClass}`} onClick={onClick}>
                <p className="text-2xl text-white">
                    {statContent}
                </p>
            </div>
        </>
    )
}