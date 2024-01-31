import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Student from "./pages/Student/Student";
import PrivateRoute from "./pages/Shared/PrivateRoute";
import Login from "./pages/Shared/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },{
                path: '/login',
                element: <Login />,
            },
            {
                path: '/student',
                element: <PrivateRoute><Student /></PrivateRoute>,
            }
        ]
    }
]);

export default routes;