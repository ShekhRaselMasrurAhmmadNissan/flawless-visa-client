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

export const loadSingleReviewForUpdate = async (id) => {
	try {
		console.log(id);
		const response = await axios.get(
			`http://localhost:5000/singleReview/${id}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						'flawless-visa-token'
					)}`,
				},
			}
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
