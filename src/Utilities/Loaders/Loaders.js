import axios from 'axios';

export const loadAllServices = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/services`);
		return response.data;
	} catch (error) {
		console.error(error.message, error.name, error.stack);
	}
};

export const getSingleServiceInformation = async (id) => {
	try {
		const response = await axios.get(
			`http://localhost:5000/services/${id}`
		);
		return response.data;
	} catch (error) {
		console.error(error.message, error.name, error.stack);
	}
};
