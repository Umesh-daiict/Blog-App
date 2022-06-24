import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
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
						<Link to='/all' style={{ textDecoration: 'none', color: 'white' }} >

							React-Blogs
							<span style={{ opacity: '0.5' }}> : See All !</span>
						</Link>

					</Typography>

					<nav className='nav'>
						<ul>
							{username && (
								<li>
									Hi! {username.toString()}
								</li>
							)}

							<Link to="/Create">
								<li>
									Create Blog !
								</li>
							</Link>
							{username ?
								<li>
									<button onClick={logOut}>Logout</button>
								</li>
								:
								<>
									<li>
										<Link to="/login">
											login
										</Link>
									</li>
									<li>
										<Link to="register">
											Sing Up
										</Link>
									</li>
								</>}

						</ul>
					</nav>
				</Toolbar>
			</AppBar>

		</>
	);
}
export default Header;
