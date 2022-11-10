import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SinglePersonalReview = ({ review }) => {
	const { _id, serviceName, message } = review;
	return (
		<div className="md:grid md:grid-cols-5 lg:grid-cols-7 md:w-3/5 mx-auto my-3 border-2 border-green-400 p-4 md:divide-x-2 rounded-lg">
			<div className="md:col-span-3 lg:col-span-5">
				<h1 className="text-2xl font-medium text-blue-400">
					{serviceName}
				</h1>
				<p className="text-lg font-medium">{message}</p>
			</div>
			<div className="md:col-span-2 md:pl-4 md:flex md:items-center">
				<button className="text-white px-3 py-2 bg-purple-500 rounded-full text-2xl">
					<FaEdit />
				</button>
				<button className="text-white px-3 py-2 bg-red-600 rounded-full text-2xl ml-6">
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default SinglePersonalReview;
