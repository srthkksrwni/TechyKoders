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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        path: "/Internship",
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
        path: "/InternshipForm",
        element: <Programes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      limit={0}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
      transition="Bounce"
    />
  </React.StrictMode>,
);
