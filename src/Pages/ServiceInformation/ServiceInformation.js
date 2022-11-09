import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserLock } from 'react-icons/fa';

const ServiceInformation = () => {
	const { user } = useContext(AuthContext);
	const service = useLoaderData();
	console.log(service);
	const { _id, title, image, price, description } = service;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:gap-x-4">
			<div>
				<div className="w-full p-4 shadow-md bg-gray-50 text-gray-800">
					<div className="space-y-4">
						<div className="space-y-2">
							<img
								src={image}
								alt=""
								className="block object-cover object-center w-full rounded-md h-96 bg-gray-500"
							/>
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-blue-600">
								{title}
							</h3>
							<p className="text-orange-500 text-lg font-medium">
								Price: ${price}
							</p>
							<p className="leading-snug text-gray-600">
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="reviews" className="mx-4">
				{!user ? (
					<div className="flex items-center justify-center text-lg text-red-500 bg-yellow-200 py-2 rounded-full">
						<FaUserLock />
						<p className="ml-3">
							Please Login to Comment.{' '}
							<Link
								to="/login"
								className="text-blue-600 animate-pulse"
							>
								Click Here to Login
							</Link>
							.
						</p>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ServiceInformation;
