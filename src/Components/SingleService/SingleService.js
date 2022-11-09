import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ service }) => {
	const { _id, title, image, price, description } = service;
	return (
		<div>
			<div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
				<div className="space-y-4">
					<div className="space-y-2">
						<PhotoProvider>
							<PhotoView src={image}>
								<img
									src={image}
									alt=""
									className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
								/>
							</PhotoView>
						</PhotoProvider>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-semibold text-blue-600">
							{title}
						</h3>
						<p className="text-orange-500 text-lg font-medium">
							Price: ${price}
						</p>
						<p className="leading-snug text-gray-600">
							{description.length > 100
								? description.slice(0, 97) + '...'
								: description}
						</p>
					</div>
					<Link
						to={`/services/${_id}`}
						type="button"
						className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
