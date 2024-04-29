import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../public/Layout.jsx";
import Home from "../public/pages/Home.jsx";
import About from "../public/pages/About.jsx";
import Services from "../public/pages/Services.jsx";
import Projects from "../public/pages/Projects.jsx";
import Contact from "../public/pages/Contact.jsx";
import Programes from "../public/componenets/Programes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Intership",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/IntershipForm",
        element: <Programes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
