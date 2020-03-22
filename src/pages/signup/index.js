import React from 'react';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login as loginAction } from '../../redux/actions/auth';
import { Routes } from '../../router';
import LoadingButton from '../../components/loading-button';

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
	const [isLoggingIn, setIsLoggingIn] = React.useState(false);

	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const confirmPasswordRef = React.useRef();

	const dispatch = useDispatch();

	async function submit (event) {
		event.preventDefault();
		const email = emailRef.current.value.trim().toLowerCase();
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (!email) return toast.error('Você deve fornecer um e-mail');
		if (!password) return toast.error('Você deve fornecer uma senha');
		if (!confirmPassword) return toast.error('Você deve fornecer uma confirmação de senha');
		if (password.length < 6) return toast.error('Sua senha deve ter no mínimo 6 caracteres');
		if (password !== confirmPassword) return toast.error('A senha e a confirmação de senha estão diferentes');

		try {
			setIsLoggingIn(true);
			const action = await loginAction(email, password);
			dispatch(action);
		} catch (e) {} finally {
			setIsLoggingIn(false);
		}
	}

	return (
		<main className={style.main}>
			<div className={style.card}>
				<h1 className={style.title}>Criar conta</h1>
				<form className={style.form} onSubmit={submit}>
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