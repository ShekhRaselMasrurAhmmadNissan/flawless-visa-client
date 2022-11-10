import React from 'react';
import Advertise from '../../Components/Advertise/Advertise';
import Header from '../../Components/Header/Header';
import HighLight from '../../Components/Highlight/HighLight';
import WhyUs from '../../Components/WhyUs/WhyUs';
import useTitle from '../../Hooks/useTitle/useTitle';

const Home = () => {
	useTitle('Home')
	return (
		<div>
			<Header />
			<HighLight />
			<Advertise />
			<WhyUs />
		</div>
	);
};

export default Home;
