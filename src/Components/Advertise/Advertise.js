import React from 'react';

const Advertise = () => {
	return (
		<div className="mt-8">
			<h1 className="capitalize text-lg md:text-3xl lg:text-5xl font-medium text-center text-blue-600 mb-4">
				Hundreds of People Choose Me as Their Consultant
			</h1>
			<div
				id="divider"
				className="w-[90%] h-2 bg-orange-600 mx-auto"
			></div>
			<div className="flex flex-col md:flex-row md:justify-evenly my-8">
				<div className="text-center shadow-lg bg-gray-200 rounded-lg p-4">
					<h1 className="text-6xl text-emerald-500 font-bold">
						500+
					</h1>
					<p className="text-lg font-medium text-blue-700">
						Visa Approved
					</p>
				</div>
				<div className="text-center shadow-lg bg-gray-200 rounded-lg p-4">
					<h1 className="text-6xl text-emerald-500 font-bold">12</h1>
					<p className="text-lg font-medium text-blue-700">
						Immigration Destination
					</p>
				</div>
				<div className="text-center shadow-lg bg-gray-200 rounded-lg p-4">
					<h1 className="text-6xl text-emerald-500 font-bold">90%</h1>
					<p className="text-lg font-medium text-blue-700">
						Clients are from References
					</p>
				</div>
				<div className="text-center shadow-lg bg-gray-200 rounded-lg p-4">
					<h1 className="text-6xl text-emerald-500 font-bold">
						100+
					</h1>
					<p className="text-lg font-medium text-blue-700">
						Ongoing Cases
					</p>
				</div>
			</div>
		</div>
	);
};

export default Advertise;
