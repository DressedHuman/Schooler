import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Shared/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import axios from "axios";
import AddAccount from "./pages/Dashboard/AddAccount/AddAccount";
import Homework from "./pages/Dashboard/Homework/Homework";
import ErrorPage from "./pages/Shared/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => axios.get(import.meta.env.VITE_URL_HOMEPAGE_DATA || 'http://localhost:8000/api/homepage_data'),
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/dashboard',
                loader: () => axios.get(import.meta.env.VITE_URL_DASHBOARD_DATA || 'http://localhost:8000/api/dashboard_data'),
                element: <Dashboard />
            },
            {
                path: '/add-account',
                element: <AddAccount />
            },
            {
                path: '/homework',
                element: <Homework />,
                loader: () => axios.get(import.meta.env.VITE_URL_HOMEWORK_DATA || '/dashboard/Homework/homework.json'),
            }
        ]
    }
]);

export default routes;