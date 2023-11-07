import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import AuthProvider from "./components/Provider/Provider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Addjob from "./components/Addjob/Addjob";
import Blogs from "./components/Blogs/Blogs";
import Myjob from "./components/Myjob/Myjob";
import Update from "./components/Update/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myjobs",
        loader: () => fetch("http://localhost:5000/job"),
        element: (
          <PrivateRoute>
            <Myjob></Myjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatejob/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",

        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
