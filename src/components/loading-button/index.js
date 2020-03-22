import React from 'react';

import Spinner from '../spinner';

function LoadingButton ({ children, isLoading, ...props }) {
	return (
		<button {...props}>
			{children}
			{ isLoading &&
				<Spinner size='small' color='white' strokeWidth={2} className='ml-2' />
			}
		</button>
	);
}

export default LoadingButton;