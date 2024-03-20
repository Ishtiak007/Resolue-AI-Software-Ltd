import MainLayout from "../../Layout/MainLayout";

import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ManageUsers from "../ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/manageUser',
                element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
            }
        ]
    },
]);