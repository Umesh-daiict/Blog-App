import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
function Header() {
	const username = localStorage.getItem('user');
	const navigation = useNavigate();
	const logOut = () => {
		localStorage.clear();
		// history.push("/login");
		navigation('/login');
	};
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography>
						<a href='/all' style={{ textDecoration: 'none', color: 'white' }}>
							React-Blogs
						</a>
					</Typography>

					<nav className='nav'>
						<ul>
							{username && (
								<li>
									Hi! {username.toString()}
								</li>
							)}
							{username && (
								<li>
									<button onClick={logOut}>Logout</button>
								</li>
							)}

							<li>
								<a href='/Create'>Create</a>
							</li>
							<li>
								<a href='/login'>login</a>
							</li>
							<li>
								<a href='/register'>Sing Up</a>
							</li>

						</ul>
					</nav>
				</Toolbar>
			</AppBar>

		</>
	);
}
export default Header;
