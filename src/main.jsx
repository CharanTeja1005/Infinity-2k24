import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Events from "./pages/Events.jsx";
import Home from "./pages/Homepage.jsx";
import SponsorsPage from "./pages/SponsorsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/gallery",
        element: <div>gallery</div>,
      },
      {
        path: "/workshop",
        element: <div>workshop</div>,
      },
      {
        path: "/sponsers",
        element: <SponsorsPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
