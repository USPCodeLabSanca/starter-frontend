import API from './base-api';
// import { withCustomError } from './error-message';

// TODO - add actual API routes

const Handlers = {
	login: (email, password) => API.post(`/auth/login`, { email, password }),
	signup: (name, email, password) => API.post(`/auth/signup`, { name, email, password }),
}

export default Handlers;