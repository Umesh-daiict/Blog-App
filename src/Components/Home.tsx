import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

//type SomeComponentProps = NavigateProps;
const Home: FC = () => {
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
					className='row d-flex justify-content-center align-items-center text-center'
					style={{ height: '100vh' }}>
					<p className='muted display-6'>Hello User👋</p>
				</div>
			</div>
		</>
	);
};

export default Home;
