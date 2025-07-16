
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCountdown } from '@/contexts/CountdownContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isCountdownComplete } = useCountdown();

  if (!isCountdownComplete) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
