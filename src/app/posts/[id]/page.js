'use client'

import postApi from '@/api/endpoints/posts';
import usersApi from '@/api/endpoints/users';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Textarea from '@/components/Textarea';

import React, { useEffect, useState } from 'react'

export default function EditPost({ params }) {
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(postApi.editPosts(params.id))
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setTitle(data.title)
                setBody(data.body)

                fetch(usersApi.editUsers(data.userId))
                    .then(userResponse => userResponse.json())
                    .then(userData => {
                        console.log(userData.name);
                        setUser(userData.name)
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    }, [params.id]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }

    return (
        <>
            <div className='mb-8'>
                <h1 className='text-4xl'>Update Post</h1>
            </div>

            {
                post ?
                    (
                        <>
                            <div className='mb-4'>
                                <Label htmlFor='title' label='Your Title' />
                                <Input
                                    type='text'
                                    name='title'
                                    id='title'
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor='body' label='Your Body' />
                                <Textarea
                                    id='body'
                                    rows='4'
                                    placeholder='Your message ...'
                                    onChange={handleBodyChange}
                                    value={body}
                                />
                            </div>

                            <div className='mt-4'>
                                <p className='text-sm'>
                                    Auther: <span>{user}</span>
                                </p>
                            </div>
                        </>
                    )
                    :
                    (<p>Loading posts...</p>)
            }
        </>
    )
}
