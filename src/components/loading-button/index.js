import React from 'react';

import Spinner from '../spinner';

function LoadingButton ({ children, isLoading, onClick = () => {}, ...props }) {
	function click () {
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