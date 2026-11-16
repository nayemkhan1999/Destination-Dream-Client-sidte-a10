import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";

import App from "./App";

import { HelmetProvider } from "react-helmet-async";
import AddTouristsSpot from "./Components/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "./Components/AllTouristsSpot/AllTouristsSpot";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Login from "./Components/Login/Login";
import MyList from "./Components/MyList/MyList";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Register from "./Components/Register/Register";
import Subcategory from "./Components/Subcategory/Subcategory";
import UpdatePage from "./Components/UpdatePage/UpdatePage";
import ViewDetailsCard from "./Components/ViewDetailsCard/ViewDetailsCard";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://destination-dreams-server.vercel.app/destination"),
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
        loader: () => fetch("https://destination-dreams-server.vercel.app/destination"),
      },
      {
        path: "/addTourist",
        element: (
          <PrivetRoute>
            <AddTouristsSpot />
          </PrivetRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivetRoute>
            <MyList />
          </PrivetRoute>
        ),
      },
      {
        path: "/viewDetailsCard/:id",
        element: (
          <PrivetRoute>
            <ViewDetailsCard />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
         fetch(`https://destination-dreams-server.vercel.app/destination/${params.id}`)
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`https://destination-dreams-server.vercel.app/destination/${params.id}`)
      },

      {
        path: "/subcategory/:category",
        element: <Subcategory />,
        loader: ({ params }) =>
          fetch(`https://destination-dreams-server.vercel.app/categoryCollection/${params.category}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
