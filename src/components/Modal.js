import React from 'react';

const Modal = ({ message, onClose, onOkay }) => {

    const handleOkay = () => {
        if (onOkay) {
            onOkay(); // Call the onOkay callback function if provided
        }
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
            <div className="bg-white rounded shadow-md z-10 p-8 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.293 3.293a1 1 0 0 1 1.414 0L10 8.586l6.293-6.293a1 1 0 1 1 1.414 1.414L11.414 10l6.293 6.293a1 1 0 0 1-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L8.586 10 2.293 3.707a1 1 0 0 1 0-1.414z"
                        />
                    </svg>
                </button>
                <p className="text-lg font-medium mb-4 pb-2">{message}</p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOkay}
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
