import React from 'react';
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
	authenticationPath: string;
	outlet: JSX.Element;
};

export default function PrivateRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
	const isAuthenticated = localStorage.getItem('auth') ? 1 : 0;
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} />;
	}
};
