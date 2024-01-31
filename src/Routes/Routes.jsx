import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout.jsx'
import Home from "../Pages/Home/Home/Home.jsx";
import DashboardLayout from "../Layout/DashboardLayout.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard.jsx";
import SignUp from "../Pages/AccessControl/SignUp/SignUp.jsx";
import SignIn from "../Pages/AccessControl/SignIn/SignIn.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard/>
            }
        ]
    },
    {
        path: '/sign-up',
        element: <SignUp/>
    },
    {
        path: 'sign-in',
        element: <SignIn/>
    }

]);