import React from 'react'

export default function Statboxes({ statContent, customClass }) {
    return (
        <>
            <div className={`flex items-center justify-center ${customClass}`}>
                <p className="text-2xl text-white">
                    {statContent}
                </p>
            </div>
        </>
    )
}