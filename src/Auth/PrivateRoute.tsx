import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export type ProtectedRouteProps = {

    outlet: JSX.Element;
  };
  
  const PrivateRoute =({outlet}: ProtectedRouteProps) => {
    const navigation = useNavigate();
    const token = localStorage.getItem('auth');
    //var token= true;
    useEffect(():void=>{
      if(!token) {
          navigation('/login');
      }  
    },[navigation, token])
    
    if(token){
      return outlet;
    }
    };
  export default PrivateRoute;