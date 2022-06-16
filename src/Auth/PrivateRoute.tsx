import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../Components/AuthComponent/SignUp';

export type ProtectedRouteProps = {

    outlet: JSX.Element;
  };
  
  const PrivateRoute =({outlet}: ProtectedRouteProps) => {
    const navigation = useNavigate();
    const token = localStorage.getItem('auth');
    if(token) {
      return outlet;
    } else {
     
        setTimeout(() => {
        navigation('/login');
       
    }, 0)
    return <SignUp />;
    }
  };
  export default PrivateRoute;