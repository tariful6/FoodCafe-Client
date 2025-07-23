import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import PrivateRoute from "./PrivateRoute";
import TestPrivate from "../Pages/Shared/TestPrivate/TestPrivate";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : 'menu',
            element : <Menu></Menu>
        },
        {
            path : 'order/:category',
            element : <Order></Order>
        },
        {
            path : 'signIn',
            element : <SignIn></SignIn>
        },
        {
            path : 'signUp',
            element : <SignUp></SignUp>
        },
        {
            path : 'secret',
            element : <PrivateRoute> <TestPrivate></TestPrivate></PrivateRoute>
        },
    ]
  },
  {
    path : 'dashboard',
    element : <Dashboard></Dashboard>,
    children : [
        {
            path : 'cart',
            element : <Cart></Cart>
        }
    ]
  }
]);

export default myRouter;