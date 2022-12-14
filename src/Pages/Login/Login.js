import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';

const Login = () => {
	useTitle('Login');

	const [error, setError] = useState('');
	const { login } = useContext(AuthContext);
	const { register, handleSubmit } = useForm();

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/home';
	const handleLogin = async (data) => {
		console.log(data);
		try {
			const response = await login(data.email, data.password);
			console.log(response.user);
			const currentUser = { email: response.user.email };
			const tokenResponse = await axios.post(
				`https://flawless-visa-server.vercel.app/jwt`,
				currentUser
			);
			console.log(tokenResponse.data);
			localStorage.setItem(
				'flawless-visa-token',
				tokenResponse.data.token
			);
			navigate(from, { replace: true });
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};
	return (
		<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-200 mt-8 md:mx-auto text-gray-800">
			<h1 className="text-3xl font-bold text-center text-blue-500">
				Login
			</h1>
			<form
				onSubmit={handleSubmit(handleLogin)}
				action=""
				className="space-y-6 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-1 text-sm">
					<label htmlFor="email" className="block text-gray-600">
						Email
					</label>
					<input
						type="email"
						{...register('email')}
						id="email"
						placeholder="Email"
						className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none"
						required
					/>
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="password" className="block text-gray-600">
						Password
					</label>
					<input
						type="password"
						{...register('password')}
						id="password"
						placeholder="Password"
						className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none"
						required
					/>
				</div>
				{error && (
					<p className="text-md font-medium text-red-500">{error}</p>
				)}
				<button
					type="submit"
					className="block w-full p-3 text-center text-lg text-gray-50 bg-blue-600 rounded-lg"
				>
					Sign in
				</button>
			</form>
			<SocialLogin />
			<p className="text-sm text-center sm:px-6 text-gray-600">
				Don't have an account?{' '}
				<Link to="/register" className="underline text-blue-800">
					Sign up
				</Link>
			</p>
		</div>
	);
};

export default Login;
