import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Routes } from '../../../router';
import { logout as logoutAction } from '../../../redux/actions/auth';
import { useDispatch } from 'react-redux';

/** Tailwind styles. */
const style = {
	main: 'flex justify-between px-8 py-4 shadow-lg',
}

function Navbar () {
	const dispatch = useDispatch();
	const history = useHistory();

	function handleLogout () {
		// Logs the user out.
		dispatch(logoutAction());

		// Sends the user to the login page.
		history.push(Routes.login);
	}

	return (
		<header className={style.main}>
			<Link to={Routes.home}><h1>Your logo here!</h1></Link>
			<nav>
				<button onClick={handleLogout}>Logout</button>
			</nav>
		</header>
	);
}

export default Navbar;