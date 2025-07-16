import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

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
    ]
  },
]);

export default myRouter;