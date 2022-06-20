import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/UI/Navbar';

import { BrowserRouter } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import NavTabs from './Components/UI/Tab';
//   }
function App() {

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<NavTabs />
				<Blog />
			</BrowserRouter>

		</div>
	);
}
export default App;
