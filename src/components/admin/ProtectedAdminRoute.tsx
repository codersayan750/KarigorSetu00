import React from 'react';
import { Outlet } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children?: React.ReactNode;
}

export const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  // Deployment B demo: direct access to admin dashboard without credential check
  return children ? <>{children}</> : <Outlet />;
};

