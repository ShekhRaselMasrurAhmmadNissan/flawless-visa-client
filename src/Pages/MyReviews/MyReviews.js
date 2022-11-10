import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SinglePersonalReview from '../../Components/SinglePersonalReview/SinglePersonalReview';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';

const MyReviews = () => {
	useTitle('My Reviews');
	const { user, logout } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);
	const [hasUpdate, setHasUpdate] = useState(true);

	useEffect(() => {
		const loadReviews = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/userReviews?email=${user?.email}`,
					{
						headers: {
							authorization: `Bearer ${localStorage.getItem(
								'flawless-visa-token'
							)}`,
						},
					}
				);
				setReviews(response.data);
			} catch (error) {
				console.error(error);
				return logout()
					.then()
					.catch((error) => console.error(error));
			}
		};
		loadReviews();
	}, [user?.email, logout, hasUpdate]);

	return (
		<div className="mt-8 lg:min-h-[415px]">
			<h1 className="text-4xl text-blue-600 font-medium text-center">
				Your Reviews
			</h1>
			<div className="lg:min-h-[377px] w-full md:flex md:items-center justify-center">
				{reviews.length === 0 ? (
					<>
						<div className="text-center">
							<p className="text-xl md:text-4xl font-bold text-yellow-300 bg-blue-400 px-6 py-4 rounded-xl">
								No Review to display.
							</p>
						</div>
					</>
				) : (
					<div className="md:w-full">
						{reviews.map((review) => (
							<SinglePersonalReview
								key={review._id}
								review={review}
								hasUpdate={hasUpdate}
								setHasUpdate={setHasUpdate}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default MyReviews;
