import API from './base-api';
import { withCustomError } from './error-message';

const Handlers = {
	login: withCustomError(
		(username, password) => API.post(`/login`, { username, password }),
		{ 401: 'Credenciais inválidas' }
	),
}

export default Handlers;