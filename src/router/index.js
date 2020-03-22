import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { withAuth, withNoAuth } from '../libs/auth-checker';

import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';

export const Routes = {
	home: '/',
	login: '/login',
	signup: '/signup',
};

function Router () {
	return (
		<Switch>
			<Route exact path={Routes.home} component={withAuth(Home)} />
			<Route exact path={Routes.login} component={withNoAuth(Login)} />
			<Route exact path={Routes.signup} component={withNoAuth(Signup)} />
			<Redirect to={Routes.home} />
		</Switch>
	);
}

export default Router;