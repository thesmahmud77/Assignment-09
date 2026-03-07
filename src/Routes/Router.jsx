import React from "react";

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: "/profile",
    element: <MyProfile></MyProfile>,
  },
]);
