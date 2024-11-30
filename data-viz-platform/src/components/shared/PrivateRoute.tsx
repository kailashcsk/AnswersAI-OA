import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import LoadingSpinner from './LoadingSpinner';


interface PrivateRouteProps {
    children: React.ReactNode;
}



const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user, loading } = useSelector((state: RootState) => state.auth);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;