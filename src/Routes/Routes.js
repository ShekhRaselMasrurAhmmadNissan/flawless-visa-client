import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Services from '../Pages/Services/Services';

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
			{ path: 'services', element: <Services /> },
		],
	},
]);

export default router;
