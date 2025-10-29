import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/home";
import Login from "../Pages/login";
import ForgotPassword from "../Pages/ForgotPassword";
import Signup from "../Pages/SignUp";
const router = createBrowserRouter([
  {
path:"/",
element : <App/>,
 children : [
    {
    path : "",
    element: <Home/>
 },
{
    path : "login",
    element: <Login/>
},
{
    path : "/forgot-password",
    element: <ForgotPassword/>
},
{
    path : "/signup",
    element: <Signup/>
}
]

  },
]);

export default router