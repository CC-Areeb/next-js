'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = process.env.API_URL;

const useCsrfToken = () => {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token from Laravel API
        axios
            .get(API_URL + '/csrf-token')
            .then((response) => {
                setCsrfToken(response.data.csrf_token);
            })
            .catch((error) => {
                console.log('Error fetching CSRF token:', error);
            });
    }, []);

    return csrfToken;
};

export default useCsrfToken;