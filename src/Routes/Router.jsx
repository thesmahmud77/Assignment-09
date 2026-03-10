import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import MyProfile from "../Pages/MyProfile";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import CommingSoon from "../Pages/CommingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/Data.json"),
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
  {
    path: "/service/:id",
    element: (
      <PrivateRoute>
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/Data.json"),
  },
  {
    path: "/comming-soon",
    element: <CommingSoon></CommingSoon>,
  },
]);
