'use client'

import usersApi from '@/api/endpoints/users';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Users() {

    // get data from api
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(usersApi.users);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);

    // show delete modal
    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDeleteModal = () => {
        setDeleteModal(false);
    }

    const deleteUser = () => {
        setDeleteModal(true);
    }

    // Perform the deletion 
    const handleDelete = () => {
        alert('User data deleted.');
    };
    return (
        <>
            <div className='mb-8'>
                <h1 className='text-4xl'>All users</h1>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center">
                                <td className='px-6 py-4'>
                                    {user.name}
                                </td>
                                <td className='px-6 py-4'>
                                    {user.username}
                                </td>
                                <td className='px-6 py-4'>
                                    {user.email}
                                </td>
                                <td className='px-6 py-4 flex justify-center space-x-1'>
                                    <Button
                                        type='submit'
                                        value='Delete'
                                        customClass='bg-red-500 hover:bg-red-700 text-white mx-4'
                                        onClick={deleteUser}
                                    />
                                    <Link href={`/users/${user.id}`} className='bg-yellow-500 rounded px-6 py-2 text-white hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110'>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete modal */}
            {
                deleteModal
                &&
                (
                    <>
                        <Modal
                            message={'Are you sure you want to delete this user data?'}
                            onClose={toggleDeleteModal}
                            onOkay={handleDelete}
                        />
                    </>
                )
            }
        </>
    )
}
