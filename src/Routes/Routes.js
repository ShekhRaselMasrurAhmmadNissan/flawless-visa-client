import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
		],
	},
]);

export default router;
