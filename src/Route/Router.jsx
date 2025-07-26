import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
    ]
  },
  {
    path : 'dashboard',
    element : <Dashboard></Dashboard>,
    children : [
        {
            path : 'cart',
            element : <Cart></Cart>
        },
        {
            path : 'payment',
            element : <Payment></Payment>
        },
        {
            path : 'paymentHistory',
            element : <PaymentHistory></PaymentHistory>
        },
        // admin route
        {
            path : 'users',
            element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path : 'addItems',
            element : <AdminRoute> <AddItems></AddItems></AdminRoute>
        },
        {
            path : 'manageItems',
            element : <AdminRoute> <ManageItems></ManageItems></AdminRoute>
        },
        {
            path : 'updateItem/:id',
            element : <AdminRoute> <UpdateItem></UpdateItem></AdminRoute>,
           loader :({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
    ]
  }
]);

export default myRouter;