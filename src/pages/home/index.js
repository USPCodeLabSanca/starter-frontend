import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/layout/navbar';

import { logout as logoutAction } from '../../redux/actions/auth';

/** Tailwind styles. */
const styles = {
	root: 'h-full w-full flex flex-col',
	main: 'flex justify-center items-center w-full h-full',
	title: 'text-xl',
	button: 'bg-gray-400 px-4 py-1 rounded mt-8',
	card: 'shadow-lg p-8 rounded-lg flex flex-col items-center',
}

/**
 * The Home page, the first page a logged-in user will see.
 * @param { Object } props
 * @param {{ name: string, email: string }} props.user
 */
function Home ({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();

	function logout () {
		// Redirects the user.
		history.push('/login');

		// Updates the redux state to log the user out.
		dispatch(logoutAction());
	}

	return (
		<div className={styles.root}>
			<Navbar />
			<main className={styles.main}>
				<div className={styles.card}>
					<h1 className={styles.title}>Welcome, {user.email}</h1>
					<button className={styles.button} onClick={logout}>Logout</button>
				</div>
			</main>
		</div>
	);
}

export default Home;