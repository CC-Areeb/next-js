import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        useEffect(() => {
            const isAuthenticated = !!localStorage.getItem('csrf_token');

            if (!isAuthenticated) {
                router.push('/login');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};
