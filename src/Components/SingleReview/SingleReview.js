import React from 'react';

const SingleReview = ({ review }) => {
	const { message, userName, userPhoto } = review;
	return (
		<div className="divide-y-2 border-2 border-blue-600 p-4 rounded-lg mb-2">
			<div className="flex items-center">
				<img src={userPhoto} alt="" className="h-8 w-8 rounded-full" />
				<h3 className="ml-2 text-xl font-medium">{userName}</h3>
			</div>
			<p className="ml-3 mt-2">{message}</p>
		</div>
	);
};

export default SingleReview;
