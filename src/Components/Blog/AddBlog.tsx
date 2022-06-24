import React, { useState } from 'react';
import './AddBlog.css';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Card } from '@material-ui/core';

declare let UploadHandler: any;

const AddBlog = (props: {
	onAddBlog: (title: string, desc1: string, photo: File) => void;
}) => {
	const [title, setTitle] = useState('');
	const [enteredBlogDesc, setenteredBlogDesc] = useState('');
	const [enteredBlogPhoto, setenteredBlogPhoto] = useState<File | undefined>();


	const tinyImgHandler: typeof UploadHandler = (blobInfo: any, success: any, failure: any) => {
		let data = new FormData();
		data.append('file', blobInfo.blob(), blobInfo.filename());

		axios.post('http://localhost:3000/blog/tinyImg', data)
			.then(function (res) {
				success(res.data);
			})
			.catch(function (err) {
				failure('HTTP Error: ' + err.message);
			});
	}

	const addUserHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (enteredBlogDesc.trim().length === 0 || enteredBlogDesc.trim().length === 0 || enteredBlogPhoto === undefined) {
			return;
		}
		console.log(enteredBlogPhoto);
		props.onAddBlog(title, enteredBlogDesc, enteredBlogPhoto);
		setenteredBlogDesc('');
		setTitle('');
		setenteredBlogPhoto(undefined);
		//  setEnteredAge('');
	};



	const handlePhoto: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.currentTarget.files === null) {
			return;
		}
		setenteredBlogPhoto(e.currentTarget.files[0]);
	};



	return (
		<Card style={{ width: '95%', height: '95%', margin: '100px auto' }}>
			<div className='blogForm'>
				<form onSubmit={addUserHandler}>
					<label htmlFor='blogTitle'>Blog Title</label>
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
						init={{
							plugins: 'link image code',
							toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code',

							images_upload_url: 'http://localhost:3000/blog/tinyImg',

							//images_upload_handler:uploadHandler,
							image_title: true,
							automatic_uploads: true,

							file_picker_types: 'image',
							images_upload_handler: tinyImgHandler
							,
							content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }'
						}}
						onEditorChange={(newText) => { setenteredBlogDesc(newText) }}
					/>
					<Button color='primary' type='submit' variant='contained' className='Button' style={{ marginTop: '5px' }}	 >
						Create Blog!
					</Button>

				</form>
			</div>
		</Card>
	);
};

export default AddBlog;
