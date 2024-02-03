import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Shared/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import axios from "axios";
import AddAccount from "./pages/Dashboard/AddAccount/AddAccount";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/dashboard',
                loader: () => axios.get('/dashboard/data.json'),
                element: <Dashboard />
            },
            {
                path: '/add-account',
                element: <AddAccount />
            }
        ]
    }
]);

export default routes;