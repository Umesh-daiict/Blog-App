
import React from 'react';
// import Card from '../UI/Card';
import './BlogList.css';
import { Buffer } from 'buffer';
//import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@material-ui/core';

const BlogList = (props: { tempBlog: any[], getData: () => void, isLoading: boolean }) => {
	if (props.isLoading) { props.getData(); }
	console.log('props log', props.tempBlog);
	return (
		<div className="posts-container">
			<ul>
				{!props.isLoading ? props.tempBlog.map((blog: any) => (
					<li key={blog._id}>
						<h1 className="heading">{blog.title}</h1>
						<img
							src={`data:image/png;base64,${Buffer.from(blog.photo).toString('base64')}`} alt='uploadby'
							style={{
								width: "80%", height: "80%", marginLeft: 'auto',
								marginRight: 'auto',
								borderRadius: '5px'
							}}
						/>
						<div dangerouslySetInnerHTML={{ __html: blog.desc1 }} />
						<div className="info">
							<h5>Written by: {blog.username}</h5>
						</div>
					</li>
				)) : <h2>Loading The Blogs...</h2>}

			</ul>

		</div>
	);
};

export default BlogList;
