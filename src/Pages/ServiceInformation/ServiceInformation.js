import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserLock } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import SingleReview from '../../Components/SingleReview/SingleReview';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';

const ServiceInformation = () => {
	useTitle('Service Information')
	
	const [reviews, setReviews] = useState([]);
	const [hasUpdate, setHasUpdate] = useState(true);
	const { user } = useContext(AuthContext);
	const service = useLoaderData();
	const { register, handleSubmit, reset } = useForm();
	// console.log(service);
	// console.log(user);
	const { _id, title, image, price, description } = service;

	useEffect(() => {
		try {
			const loadReviewsByService = async () => {
				const response = await axios.get(
					`http://localhost:5000/servicesReview/${_id}`
				);
				// console.log(response);
				setReviews(response.data);
			};
			loadReviewsByService();
		} catch (error) {
			console.error(error);
		}
	}, [hasUpdate, _id]);
	console.log(reviews);

	const handleAddReview = async (data) => {
		console.log(data);
		try {
			const reviewDetails = {
				message: data.review,
				serviceName: title,
				userEmail: user.email,
				userName: user.displayName,
				userPhoto: user.photoURL,
				createdAt: new Date(),
			};
			const response = await axios.post(
				`http://localhost:5000/reviews/${_id}`,
				reviewDetails
			);
			console.log(response);
			reset();
			setHasUpdate(!hasUpdate);
			toast.success('Added Review Successfully.');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:gap-x-4">
			<div>
				<div className="w-full p-4 shadow-md bg-gray-50 text-gray-800">
					<div className="space-y-4">
						<div className="space-y-2">
							<PhotoProvider>
								<PhotoView src={image}>
									<img
										src={image}
										alt=""
										className="block object-cover object-center w-full rounded-md h-96 bg-gray-500"
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
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="reviews" className="mx-4">
				{!user ? (
					<div className="flex items-center justify-center text-lg text-red-500 bg-yellow-200 py-2 rounded-full">
						<FaUserLock />
						<p className="ml-3">
							Please Login to Give Review.{' '}
							<Link
								to="/login"
								className="text-blue-600 animate-pulse"
							>
								Click Here to Login
							</Link>
							.
						</p>
					</div>
				) : (
					<div>
						<form
							action=""
							onSubmit={handleSubmit(handleAddReview)}
						>
							<label
								htmlFor="review"
								className="text-lg font-medium"
							>
								Review
							</label>
							<textarea
								id="review"
								{...register('review')}
								placeholder="Please write your review here..."
								className="w-full rounded-md outline-none p-2 border-2 border-blue-600 focus:border-green-500 text-black text-lg"
							></textarea>
							<div className="text-center">
								<button
									type="submit"
									className="w-full md:w-1/4 px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
								>
									Submit Review
								</button>
							</div>
						</form>
					</div>
				)}
				<div className="mt-4">
					{reviews.map((review) => (
						<SingleReview key={review._id} review={review} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceInformation;
