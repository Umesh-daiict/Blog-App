import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/UI/Navbar';

import { BrowserRouter } from 'react-router-dom';
import Blog from './Components/Blog/Blog';

//   }
function App() {

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />

				<Blog />
			</BrowserRouter>

		</div>
	);
}
export default App;
