// import API from '../../api';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export async function login (email, password) {
	// TODO - make backendcalls
	// const response = await API.login(email, password);
	await sleep(2000); // simulate a fake request
	const response = { data: { email } };
	return { type: 'AUTH_SET_USER', user: response.data };
}

export async function signup (name, email, password) {
	// TODO - make backendcalls
	// const response = await API.signup(name, email, password);
	await sleep(2000); // simulate a fake request
	const response = { data: { name, email, password } };
	return { type: 'AUTH_SET_USER', user: response.data };
}

export function setToken (token) {
	return { type: 'AUTH_SET_TOKEN', token };
}

export function logout () {
	return { type: 'AUTH_LOGOUT' };
}