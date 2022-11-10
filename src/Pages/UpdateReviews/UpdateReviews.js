import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UpdateReviews = () => {
	const { logout } = useContext(AuthContext);
	const review = useLoaderData();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const { _id, serviceName, message } = review;

	const handleUpdate = async (data) => {
		console.log(data);
		try {
			const response = await axios.patch(
				`http://localhost:5000/updateReview/${_id}`,
				{ message: data.review },
				{
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							'flawless-visa-token'
						)}`,
					},
				}
			);
			if (response.status === 401 || response.status === 403) {
				return logout.then().catch((error) => console.error(error));
			}
			console.log(response);
			if (response.data.modifiedCount > 0) {
				alert('Data Updated Successfully.');
				navigate('/myReviews');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="mt-8 lg:min-h-[416px]">
			<h1 className="text-center font-medium text-2xl text-blue-600">
				You are trying to modify the review of{' '}
				<span className="italic font-bold underline">
					{serviceName}
				</span>
				.
			</h1>
			<form action="" onSubmit={handleSubmit(handleUpdate)}>
				<label htmlFor="review" className="text-lg font-medium">
					Review
				</label>
				<textarea
					id="review"
					{...register('review')}
					defaultValue={message}
					className="w-full rounded-md outline-none p-2 border-2 border-blue-600 focus:border-green-500 text-black text-lg"
				></textarea>
				<div className="text-center">
					<button
						type="submit"
						className="w-full md:w-1/4 px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
					>
						Update Review
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateReviews;
