import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from './Blog/Blog';
import './home.css';

//type SomeComponentProps = NavigateProps;
const Home = (props:{currentUser:String}) => {
	const navigation = useNavigate();
	const logout = () => {
		localStorage.clear();
		// history.push("/login");
		navigation('/login');
	};
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					paddingLeft: 50,
					paddingRight: 50,
				}}>
				<div>
					<h3 className='m-3'>Home</h3>
				</div>
				<div>
					<button type='submit' className='buttons' onClick={logout}>
						Logout
					</button>
				</div>
			</div>
			<div className='container'>
				<div
					className='row d-flex justify-content-center align-items-center text-center'>
					<p className='muted display-6'>Hello User👋 {props.currentUser}</p>
				</div>
			</div>
			<Blog username={props.currentUser}/>
		</>
	);
};

export default Home;
