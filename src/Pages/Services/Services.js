import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleService from '../../Components/SingleService/SingleService';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const loadServices = async () => {
			const response = await axios.get(`http://localhost:5000/services`);
			// console.log(response);
			setServices(response.data);
		};
		loadServices().catch((error) =>
			console.error(error.message, error.name, error.stack)
		);
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-8">
			{services.map((service) => (
				<SingleService key={service._id} service={service} />
			))}
		</div>
	);
};

export default Services;
