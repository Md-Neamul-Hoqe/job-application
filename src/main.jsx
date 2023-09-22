import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";

import "./App.css";
import "./index.css";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import JobDetails from "./components/JobDetails/JobDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const myNewRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../data/jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../data/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myNewRouter} />
  </React.StrictMode>
);
