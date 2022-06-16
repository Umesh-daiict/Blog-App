import React, { useState } from 'react';
import './AddBlog.css';
import { Editor } from '@tinymce/tinymce-react';
	
// import Card from '../UI/Card';
// import Button from '../UI/Button';
// import ErrorModal from '../UI/ErrorModel';
//import classes from ;

const AddBlog = (props: {
	onAddBlog: (title: string,desc1: string, photo: File) => void;
}) => {
	const [title, setTitle] = useState('');
	const [enteredBlogDesc, setenteredBlogDesc] = useState('');
	const [enteredBlogPhoto, setenteredBlogPhoto] = useState<File|undefined>();
	
	
	const addUserHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (enteredBlogDesc.trim().length === 0||enteredBlogDesc.trim().length === 0|| enteredBlogPhoto===undefined) {
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
		if(e.currentTarget.files===null)
		{
			return;
		}
		setenteredBlogPhoto(e.currentTarget.files[0]);
	};



	return (
		
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

						<Editor
						textareaName='textarea'
						value={enteredBlogDesc}
						id="blogdesc"
						initialValue='write your blog'
						onEditorChange={(newText)=>{setenteredBlogDesc(newText)}}
						/>
		             	<button type='submit' className='addbtn'>
							Add blog
						</button>

				</form>
			</div>	
	);
};

export default AddBlog;
