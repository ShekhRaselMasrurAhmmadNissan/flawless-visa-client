import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';
import { CircleLoader } from 'react-spinners';

const HighLight = () => {
	const [services, setServices] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const loadHighlightServices = async () => {
			const response = await axios.get(
				`http://localhost:5000/services?limit=3`
			);
			// console.log(response);
			setServices(response.data);
			setLoader(false);
		};
		loadHighlightServices().catch((error) =>
			console.error(error.message, error.name, error.stack)
		);
	}, []);

	return (
		<div className="bg-gray-100 mt-8 mb-12 p-4">
			{loader ? (
				<CircleLoader
					color="#0cc5a0"
					size={100}
					className="mx-auto lg:mt-40"
				/>
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mb-4">
						{services.map((service) => (
							<SingleService
								key={service._id}
								service={service}
							/>
						))}
					</div>
					<div className="text-center">
						<Link
							to="/services"
							className="inline-flex items-center justify-center h-12 px-6 mr-6 border border-blue-700 font-medium tracking-wide text-white transition duration-500 rounded shadow-md bg-blue-600 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none"
						>
							See All
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default HighLight;
