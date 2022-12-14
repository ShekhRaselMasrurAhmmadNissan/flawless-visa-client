import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
	const { providerSignIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/home';
	const googleProvider = new GoogleAuthProvider();

	const handleGoogleSignIn = async () => {
		try {
			const response = await providerSignIn(googleProvider);
			// console.log(response.user);
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
		}
	};
	return (
		<>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
				<p className="px-3 text-sm text-gray-600">
					Login with social accounts
				</p>
				<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
			</div>
			<div className="my-6 space-y-4">
				<button
					aria-label="Login with Google"
					type="button"
					className="flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600 bg-blue-600 text-white hover:bg-blue-700 outline-none"
					onClick={handleGoogleSignIn}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-5 h-5 fill-current"
					>
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
					<p className="font-medium">Login with Google</p>
				</button>
			</div>
		</>
	);
};

export default SocialLogin;
