import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Content from './router';
import store from './redux/store';
import { initializeAPI } from './api/base-api';

import baseURL from './constants/api-url';
import { setToken } from './redux/actions/auth';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

initializeAPI({
	baseURL,
	onError: toast.error,
	tokenSelector: () => store.getState().auth.token,
	tokenDispatcher: token => store.dispatch(setToken(token)),
});

function App () {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={store}>
				<BrowserRouter>
					<ToastContainer hideProgressBar />
					<Content />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));