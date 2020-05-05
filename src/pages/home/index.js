import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout as logoutAction } from '../../redux/actions/auth';

const styles = {
	main: 'flex justify-center items-center w-full h-full',
	title: 'text-xl',
	button: 'bg-gray-400 px-4 py-1 rounded mt-8',
	card: 'shadow-lg p-8 rounded-lg flex flex-col items-center',
}

function Home ({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();

	function logout () {
		history.push('/login');
		dispatch(logoutAction());
	}

	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<h1 className={styles.title}>Welcome, {user.email}</h1>
				<button className={styles.button} onClick={logout}>Logout</button>
			</div>
		</main>
	);
}

export default Home;