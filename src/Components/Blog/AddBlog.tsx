import React, { useState } from 'react';
import './AddBlog.css';

// import Card from '../UI/Card';
// import Button from '../UI/Button';
// import ErrorModal from '../UI/ErrorModel';
//import classes from ;

const AddBlog = (props: {
	onAddBlog: (title: string,desc1: string, photo: File) => void;
}) => {
	const [title, setTitle] = useState('');
	const [enteredBlogDesc, setenteredBlogDesc] = useState('');
	const [enteredBlogPhoto, setenteredBlogPhoto] = useState<File>();
	
	const addUserHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (enteredBlogDesc.trim().length === 0||enteredBlogDesc.trim().length === 0|| enteredBlogPhoto===null) {
			return;
		}
		console.log(enteredBlogPhoto);
		props.onAddBlog(title,enteredBlogDesc, enteredBlogPhoto);
		setenteredBlogDesc('');
		setTitle('');
		setenteredBlogPhoto(undefined);
		//  setEnteredAge('');
	};

	const blogDescHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setenteredBlogDesc(e.currentTarget.value);
	};
	const handlePhoto: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setenteredBlogPhoto(e.currentTarget.files[0]);
	};



	return (
		<div>
			{/* {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )} */}
			<div  className='blogForm'>
				<form onSubmit={addUserHandler}>
				<label  htmlFor='blogTitle'>Blog Title</label>
					<input
					id='blogTitle'
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					/>
						<input
							type='file'
							accept='.png, .jpg, .jpeg'
							name='photo'
							id='photo'
							key='photo'
							onChange={handlePhoto}
						/>

						<label htmlFor='blogdesc'>Blog Description</label>
			
						 <textarea className='textarea' autoComplete="off" onChange={blogDescHandler} value={enteredBlogDesc} id="blogdesc"rows={6} cols={50} >
     					</textarea>
		             	<button type='submit' className='addbtn'>
							Add blog
						</button>

				</form>
			</div>
		</div>
	);
};

export default AddBlog;
