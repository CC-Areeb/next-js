import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded shadow-md z-10 p-24 text-center">
                <p className="text-lg font-medium mb-2 pb-5">{message}</p>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Okay
                </button>
            </div>
        </div>
    );
};

export default Modal;
