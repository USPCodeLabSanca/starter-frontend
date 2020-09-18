# Codelab's front-end template

This a template using **USP Codelab São Carlos**'s stack. It contains the following major libraries:

- [`react`](https://reactjs.org/) - Javascript framework/library for componentization
- [`react-router-dom`](https://reactrouter.com/web/guides/quick-start) - Library to implement Routing using React.
- [`redux`](https://redux.js.org/) - State management library
- [`redux-persist`](https://github.com/rt2zz/redux-persist) - Library for persisting some parts of Redux on localstorage (things like user authentication tokens).
- [`axios`](https://github.com/axios/axios) - Library for making HTTP requests (the `fetch` api is a bit lacking in some features this project uses).
- [`react-toastify`](https://github.com/fkhadra/react-toastify) - Library for showing a pretty toast
- [`tailwind`](https://tailwindcss.com/) - A CSS framework. Its' a lightweight Bootstrap-like CSS library.

## What is this template optimal for?

This template is optimal for web app development with React. It has an already predefined architecture that defines authentication/authorization behaviors and routing with user access restrictions.

This project is not really suitable for Landing pages. They usually don't need authentication/authorization or complex routing schemes. See [Next.js](https://nextjs.org/) for a good landing page framework.

## How to build and deploy?

First, you need to have [Node.js](https://nodejs.org/) installed (and NPM too, but it's usually automaticaly installed with `Node.js`). Once you have Node.js installed, clone this repository somewhere, open a terminal inside it and run `npm install`, and then `npm run build`. When that's done, a file named `build` should've been created, and will contain your built project. Now, you only need to serve that folder with a simple server to have yourpage online!

If you don't want to build, but want to develop, do the same steps as above, bus instead of running `npm run build`, run `npm run start`. That should open a browser tab with your project on it.

## How are the folders organized?

The root of the project is reserved for configuration files. The only other relevant folder is the `src` folder, which contains your whole application. Each subfolder of `src` has a `README.md` explaining what it should contain, and it's purpose on the project.

Always remember this is not set in stone, and is simply the best way I've developed to organize my project at the time of writting.

## Why these libraries?

These are some libraries I personaly enjoy the most working with. Here, I'll list some of the reasons why:

### `react`

React is simple, small and very effective. It has the largest market share at the time of writting, and is the most known framework around the Codelab team.

I won't list all of React's pros and cons here because I believe many people have done this already in much bettter written articles, so if you're reading this and are unsure about React, I'd suggest just googling a bit about it.

## `react-router-dom`

React doesn't have a native solution for page routing. It's just a component library. `react-router-dom` is small, fast and very easy do pick up. It solves all problems that require solving in almost all React projects, and is very flexible.

## `redux`

Almost any aplication requires some state (such as logged in user, or the user's shopping cart). Redux is one of the most famous solutions for `React`, and is the most likely library to be found on the wild

## `redux-persist`

Some pieces of state should persist between sessions (if the user closes and opens your site, this state sould persist). `redux-persist` helps with this. You have a specific redux state to bem constantly managed by `redux-persist`, and not have to worry about losing your state on page refresh anymore!

## `axios`

`axios` is very popular among backend developers. On the front-end, we usually have the `fetch` api, but that doesn't have some features that are required by this project.

## `react-toastify`

An extremely simple and effective Toast library.

## `tailwind`

This is strictly a CSS framework (no javascript). It defines some classes that can be used by any tag. It's very much like Bootstrap, but without the components, making this framework much lighter and simpler to use.