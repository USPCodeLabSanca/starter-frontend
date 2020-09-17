import React from 'react';

import Spinner from '../spinner';

/**
 * This is a normal button, but with an aditional prop `isLoading`, that when receives a
 * truthy value, will show a spinner beside the button text, and prevent the button
 * from being clicked.
 *
 * Any prop not described below will be forwarded to the `svg` element.
 */
function LoadingButton ({ children, isLoading, onClick = () => {}, ...props }) {
	function click () {
		// Cannot click the button when it's loading.
		if (isLoading) return;
		onClick();
	}

	return (
		<button {...props} onClick={click}>
			{children}
			{ isLoading &&
				<Spinner size='small' color='white' strokeWidth={2} className='ml-2' />
			}
		</button>
	);
}

export default LoadingButton;