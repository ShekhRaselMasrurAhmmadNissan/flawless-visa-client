import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useTitle from '../../Hooks/useTitle/useTitle';

const AddService = () => {
	useTitle('Add Service')
	const { register, handleSubmit, reset } = useForm();

	const handleAddService = async (data) => {
		console.log(data);
		const service = {
			title: data.title,
			image: data.image,
			price: data.price,
			description: data.description,
		};

		const response = await axios.post(
			`http://localhost:5000/services`,
			service
		);
		if (response.data.acknowledged) {
			alert('Service Added Successfully.');
		}
		reset();
	};

	return (
		<div className="mt-8">
			<div className="w-full md:w-3/5 md:mx-auto p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800">
				<h1 className="text-3xl font-bold text-center text-blue-600">
					Add a Service
				</h1>
				<form
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
					onSubmit={handleSubmit(handleAddService)}
				>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="serviceName"
							className="block text-gray-600"
						>
							Service Name
						</label>
						<input
							type="text"
							{...register('title')}
							id="serviceName"
							placeholder="Service Name"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 outline-none"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="picture"
							className="block text-gray-600"
						>
							Picture
						</label>
						<input
							type="text"
							{...register('image')}
							id="picture"
							placeholder="Photo URL"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 outline-none"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="price" className="block text-gray-600">
							price
						</label>
						<input
							type="number"
							{...register('price')}
							id="price"
							placeholder="Price"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 outline-none"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="description"
							className="block text-gray-600"
						>
							Description
						</label>
						<textarea
							id="description"
							{...register('description')}
							placeholder="Description"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 outline-none"
						></textarea>
					</div>
					<button
						type="submit"
						className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600"
					>
						Add Service
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddService;
