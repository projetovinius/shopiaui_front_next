'use client'
import { useContext, ReactNode } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const router = useRouter();

    if (!isAuthenticated) {
        router.push('/signin'); 
        return null; 
    }

    return <>{children}</>;
};

export default PrivateRoute;
