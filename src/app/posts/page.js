'use client'

import postApi from '@/api/endpoints/posts';
import usersApi from '@/api/endpoints/users';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { truncateText } from '@/utils/textTruncate';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(postApi.posts);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getPosts();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(usersApi.users);
                const data = await response.json();
                const usersData = data.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {});
                setUsers(usersData);
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
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center">
                                <td className='px-6 py-4'>
                                    {users[post.userId] ? users[post.userId].name : ''}
                                </td>
                                <td className='px-6 py-4'>
                                    {truncateText(post.title, 10)}
                                </td>
                                <td className='px-6 py-4'>
                                    {truncateText(post.body, 50)}
                                </td>
                                <td className='px-6 py-4 flex justify-center space-x-1'>
                                    <Button
                                        type='submit'
                                        value='Delete'
                                        customClass='bg-red-500 hover:bg-red-700 text-white mx-4'
                                        onClick={deleteUser}
                                    />
                                    <Link href={`/posts/${post.id}`} className='bg-yellow-500 rounded px-6 py-2 text-white hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110'>
                                        Read full text
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
                            message={'Are you sure you want to delete this post?'}
                            onClose={toggleDeleteModal}
                            onOkay={handleDelete}
                        />
                    </>
                )
            }
        </>
    )
}
