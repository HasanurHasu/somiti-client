import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Dashboard/Dashboard";
import TotalMember from "../Dashboard/TotalMember";
import MemberInfo from "../Dashboard/MemberInfo";
import PrivateRoute from "./PrivateRoute";
import ProfileUpdate from "../Dashboard/ProfileUpdate";
import AdminRoute from "./AdminRoute";
import ApplyForLoan from "../Dashboard/ApplyForLoan";
import AllAppliedLoan from "../Dashboard/AllAppliedLoan";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/all-members",
                element: <AdminRoute><TotalMember /></AdminRoute>
            },
            {
                path: '/dashboard/member/:id',
                element: <PrivateRoute><MemberInfo></MemberInfo></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
            },
            {
                path: '/dashboard/applyLoan',
                element: <PrivateRoute><ApplyForLoan></ApplyForLoan></PrivateRoute>
            },
            {
                path: '/dashboard/update-profile/:id',
                element: <PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
            },
            {
                path: '/dashboard/appliedLoan',
                element: <PrivateRoute><AllAppliedLoan></AllAppliedLoan></PrivateRoute>
            }
        ]
    }
]);

export default Router;