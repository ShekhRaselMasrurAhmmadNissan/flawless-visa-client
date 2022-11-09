import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import PrivateRoute from '../Layouts/PrivateRoute/PrivateRoute';
import AddService from '../Pages/AddService/AddService';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceInformation from '../Pages/ServiceInformation/ServiceInformation';
import Services from '../Pages/Services/Services';
import {
	getSingleServiceInformation,
	loadAllServices,
} from '../Utilities/Loaders/Loaders';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{
				path: 'services',
				element: <Services />,
				loader: loadAllServices,
			},
			{
				path: 'services/:id',
				element: <ServiceInformation />,
				loader: ({ params }) => getSingleServiceInformation(params.id),
			},
			{
				path: 'addService',
				element: (
					<PrivateRoute>
						<AddService />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
