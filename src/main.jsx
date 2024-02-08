import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Guest from "./Layouts/Guest.jsx";
import ErrorPage from "./Pages/Error.jsx";
import ButtonPage from "./Pages/ButtonPage.jsx";
import AlertPage from "./Pages/AlertPage.jsx";
import CardPage from "./Pages/CardsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <ButtonPage />,
      },
      {
        path: "Cards",
        element: <CardPage />,
      },
      {
        path: "alert",
        element: <AlertPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
