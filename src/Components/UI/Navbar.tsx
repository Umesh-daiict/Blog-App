import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Navbar.css';
function Header() {
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
