import React from 'react';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup as signupAction, setToken as setTokenAction } from '../../redux/actions/auth';
import { Routes } from '../../router';
import LoadingButton from '../../components/reusable/loading-button';

const style = {
	main: 'h-full flex justify-center items-center p-4',
	card: 'rounded-lg p-4 bg-white shadow-lg w-full max-w-md flex flex-col items-center',
	title: 'text-2xl font-bold',
	form: 'w-full flex flex-col justify-center items-center',
	input: 'my-2 py-2 px-4 border rounded-lg w-full',
	button: 'bg-gray-600 text-white px-4 py-2 mt-2 mb-4 rounded-lg w-full',
	hr: 'w-full border-b',
	createAccountLink: 'text-sm mt-2',
	link: 'text-blue-500',
}

function Login () {
	/**
	 * This state is updated when the user submits the login for. The statee is used
	 * to display a spinner on the button while the request is happening
	 */
	const [isLoggingIn, setIsLoggingIn] = React.useState(false);

	// React refs used to read the inputs's values.
	const nameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const confirmPasswordRef = React.useRef();

	const dispatch = useDispatch();

	/** Function called when the user submits the form */
	async function submit (event) {
		event.preventDefault();	// Prevents the page from reloading.

		const name = nameRef.current.value.trim();
		const email = emailRef.current.value.trim().toLowerCase();
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		// Error treatment.
		if (!name) return toast.error('Você deve fornecer um nome');
		if (!email) return toast.error('Você deve fornecer um e-mail');
		if (!password) return toast.error('Você deve fornecer uma senha');
		if (!confirmPassword) return toast.error('Você deve fornecer uma confirmação de senha');
		if (password.length < 6) return toast.error('Sua senha deve ter no mínimo 6 caracteres');
		if (password !== confirmPassword) return toast.error('A senha e a confirmação de senha estão diferentes');

		try {
			// Show spinner
			setIsLoggingIn(true);
			const action = await signupAction(name, email, password);
			dispatch(setTokenAction('token')); // TODO - remove this if proper backend is placed
			dispatch(action);
		} catch (e) { console.error(e); } finally {
			// Hide spinner
			setIsLoggingIn(false);
		}
	}

	return (
		<main className={style.main}>
			<div className={style.card}>
				<h1 className={style.title}>Criar conta</h1>
				<form className={style.form} onSubmit={submit}>
					<input className={style.input} ref={nameRef} type='text' placeholder='Seu nome' />
					<input className={style.input} ref={emailRef} type='email' placeholder='E-mail' />
					<input className={style.input} ref={passwordRef} type='password' placeholder='Senha' />
					<input className={style.input} ref={confirmPasswordRef} type='password' placeholder='Confirmar Senha' />
					<LoadingButton
						isLoading={isLoggingIn}
						className={style.button}
						type='submit'
					>
						CRIAR
					</LoadingButton>
				</form>
				<hr className={style.hr} />
				<p className={style.createAccountLink}>
					Já tem conta? Entre <Link to={Routes.login} className={style.link}>aqui</Link>.
				</p>
			</div>
		</main>
	);
}

export default Login;