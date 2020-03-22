import API from '../../api';

export async function login (username, password) {
	const response = await API.login(username, password);
	return { type: 'AUTH_SET_USER', user: response.data };
}

export async function setToken (token) {
	return { type: 'AUTH_SET_TOKEN', token };
}

export function logout () {
	return { type: 'AUTH_LOGOUT' };
}