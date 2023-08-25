import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
export const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [loader, setLoader] = useState(true)
        useEffect(() => {
            const isAuthenticated = !!localStorage.getItem('csrf_token');
            if (!isAuthenticated) {
                router.push('/login');
            } else {
                setLoader(false);
            }
        }, []);

        if (loader) {
            return <Spinner />;
        }
        return <WrappedComponent {...props} />;
    };
};
