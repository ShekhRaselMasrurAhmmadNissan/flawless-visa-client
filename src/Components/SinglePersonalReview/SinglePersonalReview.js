import axios from 'axios';
import React, { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SinglePersonalReview = ({ review, hasUpdate, setHasUpdate }) => {
	const { logout } = useContext(AuthContext);
	const { _id, serviceName, message } = review;
	const handleDelete = async () => {
		try {
			const decision = window.confirm(
				`Are You sure to delete the review of ${serviceName}?`
			);
			if (decision) {
				const response = await axios.delete(
					`http://localhost:5000/reviews/${_id}`,
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
				if (response.data.deletedCount > 0) {
					alert('Deleted Successfully.');
					setHasUpdate(!hasUpdate);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="md:grid md:grid-cols-5 lg:grid-cols-7 md:w-3/5 mx-auto my-3 border-2 border-green-400 p-4 md:divide-x-2 rounded-lg">
			<div className="md:col-span-3 lg:col-span-5">
				<h1 className="text-2xl font-medium text-blue-400">
					{serviceName}
				</h1>
				<p className="text-lg font-medium">{message}</p>
			</div>
			<div className="md:col-span-2 md:pl-4 md:flex md:items-center">
				<Link
					to={`/updateReview/${_id}`}
					className="text-white px-3 py-2 bg-purple-500 rounded-full text-2xl"
				>
					<FaEdit />
				</Link>
				<button
					className="text-white px-3 py-2 bg-red-600 rounded-full text-2xl ml-6"
					onClick={handleDelete}
				>
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default SinglePersonalReview;
