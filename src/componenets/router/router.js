import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])