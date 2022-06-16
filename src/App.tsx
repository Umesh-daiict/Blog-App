import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './Components/AuthComponent/SignUp';
import Login from './Components/AuthComponent/Login';
import PrivateRoute from './Auth/PrivateRoute';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
// interface UserData {
// 	username: string;
	
//   }
function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<PrivateRoute  outlet={<Home/>} />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
