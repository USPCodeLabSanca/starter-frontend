# Services folder

Services are components that only communicate with redux, and will usually just wait to act on a state change. They should only be imported by the `/src/index.js` file, and should be placed alongside the `Content` component.

Some examples of possible services are:
- **Screen resize detector**: A service that, when rendered, attaches a listener to the window's resize event. Whenver a resize occurs, the service will update a redux state, to warn all other pages of the event. This way, redux becomes the source of truth about the user's screen.

- **Modal renderer**: A service that will listen for a redux state that contains the modal component that should be renderd. Whenever that state is changed to a component, the service will render that component on top of everything else on the screen.

- **Automatic user logout**: A service that will constantly check if the user's session has expired, and if it does, redirects the user to the login page.

Note how all services will only communicate with the redux state, and not with any page or component. Services are built to only respond to events.