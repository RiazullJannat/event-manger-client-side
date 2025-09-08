import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../pages/Home";
import Events from "../pages/Events";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../pages/MyBookings";
import AddEvent from "../pages/AddEvent";
import AdminRoute from "./AdminRoute";
import Event from "../eventComponents/Event";
import RegisterEvent from "../eventComponents/RegisterEvent";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/events',
                element: <Events />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings /></PrivateRoute>
            },
            {
                path: '/add-event',
                element: <AdminRoute><AddEvent /></AdminRoute>
            },
            {
                path: '/events/:id',
                element: <Event />
            },
            {
                path: '/events/:id/register',
                element: <PrivateRoute><RegisterEvent /></PrivateRoute>
            }
        ]
    }
])