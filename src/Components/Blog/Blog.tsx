import React, { useState } from 'react';
import AddBlog from './AddBlog';
import BlogList from './BlogList';
import axios from 'axios';
import FormData from "form-data";
//import AddUser from './components/Users/AddUser';
//import UsersList from './components/Users/UsersList';

function Blog() {
	const [tempBlog, setTempBlog] = useState([]);	
	const [isLoading, setIsLoading] = useState(true);
	const username=localStorage.getItem('user');
	const getBlogs=()=>{
		axios.get('http://localhost:3000/blog/all').then(blogs=>{
			console.log(blogs);
		setTempBlog(blogs.data);
		console.log("Get in Effect")
		setIsLoading(false)
	}).catch(error=> console.log(error));		
}
	const addBlogHandler = (title:string, desc2: string, photo1: File) => {
		if(photo1 !== null){

			const formData = new FormData();
			
			formData.append('title', title);
			formData.append('photo', photo1);
			formData.append('desc1', desc2);
			
			formData.append('username',username);
			
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
				});  }else{
					console.log('upload the img')
				}


				
		
	};

	return (
		<div>
			{/* <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} /> */}
			<div>
				<h3 className='m-3'>Create Blog</h3>
			</div>
			<AddBlog onAddBlog={addBlogHandler} />
			<div>
				<h3 className='m-3'>Blogs</h3>
			</div>
			<BlogList tempBlog={tempBlog} getData={getBlogs} isLoading={isLoading}/>
		</div>
	);
}

export default Blog;
