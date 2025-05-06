import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import MyBookings from "../pages/MyBookings";
import Contact from "../pages/Contact";
import DocDetails from "../pages/DocDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>fetch('docData.json'),
        path: "/",
        Component: Home,
      },
      {

        path: "/MyBookings",
        Component: MyBookings,

      },
      {

        // loader: ()=>fetch('blog.json'),
        path: "/Blogs",
        Component: Blogs,
      },
      {

        path: "/Contact",
        Component: Contact,

      },
      {
        path: "/DocDetails/:id",
        id: "doc-details", 
        loader: () => fetch("docData.json").then(res => res.json()),
        Component: DocDetails,
      }
      
    ],
  },
]);
