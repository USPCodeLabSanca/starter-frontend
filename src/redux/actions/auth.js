// import API from '../../api';

/** When you're finished implementing all actions in this file, this `sleep` should be removed */
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

/**
 * Makes a request for the backend to log the user in.
 * @argument { string } email - The user's email
 * @argument { string } password - The user's password
 */
export async function login (email, password) {
	// TODO - make backendcalls
	// const response = await API.login(email, password);
	await sleep(2000); // simulate a fake request
	const response = { data: { email } };
	return { type: 'AUTH_SET_USER', user: response.data };
}

/**
 * Makes a request for the backend to create a new user.
 * @argument { string } name - The new user's name
 * @argument { string } email - The new user's email
 * @argument { string } password - The new user's password
 */
export async function signup (name, email, password) {
	// TODO - make backendcalls
	// const response = await API.signup(name, email, password);
	await sleep(2000); // simulate a fake request
	const response = { data: { name, email, password } };
	return { type: 'AUTH_SET_USER', user: response.data };
}

/**
 * This is mainly used by the API whenever it receives a new authentication token
 * from the backend
 * @argument { string } token
 */
export function setToken (token) {
	return { type: 'AUTH_SET_TOKEN', token };
}

/**
 * Logs the user out. Should delete all user `auth` information, including JWT tokens.
 */
export function logout () {
	return { type: 'AUTH_LOGOUT' };
}