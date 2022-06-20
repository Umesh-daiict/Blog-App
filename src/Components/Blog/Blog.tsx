import React, { useState } from 'react';
import AddBlog from './AddBlog';
import BlogList from './BlogList';
import axios from 'axios';
import FormData from "form-data";
import PrivateRoute, { ProtectedRouteProps } from '../../Auth/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../AuthComponent/SignUp';
import Login from '../AuthComponent/Login';

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
	authenticationPath: '/login',
};
function Blog() {
	const [tempBlog, setTempBlog] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const username = localStorage.getItem('user');
	const getBlogs = () => {
		axios.get('http://localhost:3000/blog/all').then(blogs => {
			console.log(blogs);
			setTempBlog(blogs.data);
			console.log("Get in Effect")
			setIsLoading(false)
		}).catch(error => console.log(error));
	}
	const addBlogHandler = (title: string, desc2: string, photo1: File) => {
		if (photo1 !== null) {
			const formData = new FormData();
			formData.append('title', title);
			formData.append('photo', photo1);
			formData.append('desc1', desc2);
			formData.append('username', username);
			axios
				.post('http://localhost:3000/blog/Create', formData)
				.then(function (response) {
					//   IF User ALREADY EXIST
					if (response.data.success === false) {
						console.log(response);
					} else {
						console.log('Success, post req is made!!');
						//					setIsLoading(true);
						getBlogs();
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			console.log('upload the img')
		}


	};

	return (
		<Routes>
			<Route path='/register' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
			<Route path='all' element={<PrivateRoute
				{...defaultProtectedRouteProps}
				outlet={<BlogList
					tempBlog={tempBlog}
					getData={getBlogs}
					isLoading={isLoading}
				/>} />} />
			<Route path='Create' element={<PrivateRoute
				{...defaultProtectedRouteProps}
				outlet={<AddBlog onAddBlog={addBlogHandler} />} />}>
			</Route>
		</Routes>

	);
}

export default Blog;
