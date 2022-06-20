import React, { useState, useEffect } from 'react';
const authContext = React.createContext({
	isLoggedIn: true,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and passwords
		// But it's just a dummy/ demo anyways
		localStorage.setItem('logIn', '1');
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem('logIn');
		setIsLoggedIn(false);
	};
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const id = localStorage.getItem('logIn');
		if (id === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<authContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}>
			{props.children}
		</authContext.Provider>
	);
};
export default authContext;
