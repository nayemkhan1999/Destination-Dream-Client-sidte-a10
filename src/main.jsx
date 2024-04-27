import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";

import App from "./App";

import "./index.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AllTouristsSpot from "./Components/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "./Components/AddTouristsSpot/AddTouristsSpot";
import MyList from "./Components/MyList/MyList";
import AuthProvider from "./Components/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/destination"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allTourist",
        element: <AllTouristsSpot />,
        loader: () => fetch("http://localhost:5000/destination"),
      },
      {
        path: "/addTourist",
        element: <AddTouristsSpot />,
      },
      {
        path: "/myList",
        element: <MyList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
