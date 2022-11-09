import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../../Components/SingleService/SingleService';

const Services = () => {
	const services = useLoaderData();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:gap-y-6 mt-8">
			{services.map((service) => (
				<SingleService key={service._id} service={service} />
			))}
		</div>
	);
};

export default Services;
