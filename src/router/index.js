import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { withAuth, withNoAuth } from '../libs/auth-checker';

import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';

/**
 * Contains all of your app's routes. Whenever you need to reroute the user to another
 * page, import this variable and use it to get the route string. Don't use the string
 * directly. Here's an example:
 * @example
 * // Wrong
 * history.push('/login');
 *
 * // Right
 * import { Routes } from '../router';
 * history.push(Routes.login);
*/
export const Routes = {
	home: '/',
	login: '/login',
	signup: '/signup',
};

/**
 * The main `Router` component of the app. This component is responsible for
 * rendering the correct component according to the user's current URL.
*/
function Router () {
	return (
		// The `Switch` component will always only render a single `Route` component.
		// In this case, it will render the `Route` component whose path matches the
		// current path of the user.
		<Switch>
			{/* `Route` components will only render their `component` prop if the user's
			URL matches the `path` prop. The `exact` prop is to make sure the user's
			URL has to perfectly match the `path` prop of the component.

			the `withAuth` and `withNoAuth` functions are described on their definition
			file. if you'd like to know what they do, visit that. */}
			<Route exact path={Routes.home} component={withAuth(Home)} />
			<Route exact path={Routes.login} component={withNoAuth(Login)} />
			<Route exact path={Routes.signup} component={withNoAuth(Signup)} />

			{/* Since the `Switch` only renders a single component, if all of the `Route`
			components above fail to render, this `Redirect` component will be rendered,
			redirecting the user to it's `to` prop. */}
			<Redirect to={Routes.home} />
		</Switch>
	);
}

export default Router;