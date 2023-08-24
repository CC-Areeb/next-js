'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useState } from 'react'

export default function UserOTP() {

    const [formValues, setFormValues] = useState({
        otp_number: '',
    })

    const handleFormValues = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = () => {
        alert('OTP ongoing process!');
    }

    const handleResendOTP = () => {

        // trigger the resend otp api ...

        alert('OTP has been resent again!');
    }

    return (
        <>
            <div className='mt-16 text-center'>
                <p className='text-4xl'>
                    OTP verification
                </p>
            </div>

            <form method='POST' className='md:mx-[100px] lg:mx-[200px] xl:mx-[300px] rounded-2xl'>
                <div className='mt-16'>
                    <div className='w-[50%] m-auto'>
                        <label htmlFor="otp_number" className='block text-sm font-medium text-gray-900 dark:text-white'>OTP code:</label>
                        <Input
                            type='number'
                            name='otp_number'
                            onChange={handleFormValues}
                            id='otp_number'
                        />
                    </div>
                </div>

                <div className="text-center mt-10 flex justify-evenly">
                    <Button
                        type='submit'
                        onClick={handleSubmit}
                        value="Verify OTP!"
                        customClass='bg-blue-500 hover:bg-blue-700 text-white mb-6'
                    />

                    <Button
                        type='submit'
                        onClick={handleResendOTP}
                        value="Resend OTP!"
                        customClass='bg-blue-500 hover:bg-blue-700 text-white mb-6'
                    />
                </div>
            </form>
        </>
    )
}
