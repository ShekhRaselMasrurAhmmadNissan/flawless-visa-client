import React from 'react';

const WhyUs = () => {
	return (
		<div className="mt-8 bg-gray-100 py-8">
			<h1 className="text-center text-4xl font-medium text-blue-600">
				Why Choose Me
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-evenly mt-4">
				<div className="w-[90%] mx-auto text-center bg-gray-200 rounded-lg p-4">
					<h2 className="text-xl md:text-2xl font-medium text-emerald-800 mb-3">
						Legal Representation
					</h2>
					<p>
						I have Legal certificate and trade license from
						Bangladesh Government.
					</p>
				</div>
				<div className="w-[90%] mx-auto text-center bg-gray-200 rounded-lg p-4">
					<h2 className="text-xl md:text-2xl font-medium text-emerald-800 mb-3">
						Availability
					</h2>
					<p>
						Clients can meet me personally to take advise from me
						and for further information.
					</p>
				</div>
				<div className="w-[90%] mx-auto text-center bg-gray-200 rounded-lg p-4">
					<h2 className="text-xl md:text-2xl font-medium text-emerald-800 mb-3">
						Same Address
					</h2>
					<p>
						I have been working form approximately 5 years on Visa
						processing. To meet me, visit{' '}
					</p>
					<address>Mirpur-10, Dhaka</address>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
