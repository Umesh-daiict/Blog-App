import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import PrivateRoute from './Auth/PrivateRoute';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
// interface UserData {
// 	username: string;
	
//   }
function App() {
	const [curUser,setCurUser]=useState<string>('');
	const LoginUser =(userName: any)=>{
		setCurUser(userName);
	//	console.log(userName);
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<SignUp />} />
				<Route path='/login' element={<Login onLogin={LoginUser}/>} />
				<Route path='/home' element={<PrivateRoute  outlet={<Home currentUser={curUser}/>} />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
