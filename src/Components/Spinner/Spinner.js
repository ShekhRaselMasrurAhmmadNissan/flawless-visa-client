import React from 'react';
import { CircleLoader } from 'react-spinners';

const Spinner = () => {
	return (
		<div className="h-screen w-screen m-auto">
			<CircleLoader
				color="#0cc5a0"
				size={100}
				className="mx-auto lg:mt-40"
			/>
		</div>
	);
};

export default Spinner;
