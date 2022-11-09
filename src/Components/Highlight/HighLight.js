import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HighLight = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const loadHighlightServices = async () => {
			const response = await axios.get(
				`http://localhost:5000/services?limit=3`
			);
			// console.log(response);
			setServices(response.data);
		};
		loadHighlightServices().catch((error) =>
			console.error(error.message, error.name, error.stack)
		);
	}, []);

	return (
		<div>
			{services.map((service) => (
				<li key={service._id}>{service.title}</li>
			))}
		</div>
	);
};

export default HighLight;
