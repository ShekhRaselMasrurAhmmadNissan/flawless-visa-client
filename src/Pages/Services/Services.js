import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../../Components/SingleService/SingleService';
import useTitle from '../../Hooks/useTitle/useTitle';

const Services = () => {
	useTitle('Services')
	const services = useLoaderData();

	return (
		<div className="mt-4">
			<h1 className="text-6xl font-medium text-center text-blue-600">
				Services
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:gap-y-6 mt-8">
				{services.map((service) => (
					<SingleService key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
