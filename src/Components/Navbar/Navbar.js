import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import navbarLogo from '../../Assets/Navbar-Logo.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLogout = async () => {
		try {
			const response = await logout();
			setIsMenuOpen(false);
			toast.success('Logout Successful.');
		} catch (error) {
			console.error(error);
		}
	};

	const navItems = (
		<>
			<li>
				<NavLink
					to="home"
					title="Home"
					className={({ isActive }) =>
						isActive
							? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
							: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
					}
					onClick={() => {
						setIsMenuOpen(false);
					}}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="services"
					title="Services"
					className={({ isActive }) =>
						isActive
							? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
							: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
					}
					onClick={() => {
						setIsMenuOpen(false);
					}}
				>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink
					to="blog"
					title="Blog"
					className={({ isActive }) =>
						isActive
							? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
							: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
					}
					onClick={() => {
						setIsMenuOpen(false);
					}}
				>
					Blog
				</NavLink>
			</li>
			{user ? (
				<>
					<li>
						<NavLink
							to="addService"
							title="Add A Service"
							className={({ isActive }) =>
								isActive
									? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
									: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
							}
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Add Service
						</NavLink>
					</li>

					<li>
						<NavLink
							to="myReviews"
							title="My Reviews"
							className={({ isActive }) =>
								isActive
									? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
									: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
							}
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							My Reviews
						</NavLink>
					</li>

					<li>
						<button
							title="Logout"
							className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400"
							onClick={handleLogout}
						>
							Logout
						</button>
					</li>
					<li className="flex items-center">
						{user?.photoURL ? (
							<img
								src={user?.photoURL}
								alt=""
								title={user?.displayName}
								className="h-12 w-12 object-center rounded-full"
							/>
						) : (
							<FaUserAlt
								title={user?.displayName}
								className="h-12 w-12 rounded-full object-center"
							/>
						)}
						<p className="lg:hidden text-white text-lg ml-3">
							{user?.displayName}
						</p>
					</li>
				</>
			) : (
				<>
					<li>
						<NavLink
							to="login"
							title="Login"
							className={({ isActive }) =>
								isActive
									? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
									: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
							}
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to="register"
							title="Sign Up"
							className={({ isActive }) =>
								isActive
									? 'font-medium tracking-wide transition-colors duration-200 text-teal-400'
									: 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-400'
							}
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Sign Up
						</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className="bg-gray-900">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-8 lg:px-12">
				<div className="relative flex items-center justify-between">
					<Link
						to="/"
						title="Flawless Visa"
						className="inline-flex items-center"
					>
						<img src={navbarLogo} alt="" />
					</Link>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						{navItems}
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg
								className="w-5 text-gray-600"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full bg-gray-600 z-20">
								<div className="p-5 bg-gray-600 border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												<svg
													className="w-5 text-white"
													viewBox="0 0 24 24"
												>
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4 bg-gray-600 px-6 py-3">
											{navItems}
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
