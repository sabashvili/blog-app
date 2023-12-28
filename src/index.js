import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Modal from "react-modal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogCreatePage from "./components/Pages/BlogCreatePage";
import AuthProvider from "./components/Providers/AuthProvider";
import ModalProvider from "./components/Providers/ModalProvider";
import CategoriesProvider from "./components/Providers/CategoriesProvider";
import BlogPage from "./components/Pages/BlogPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement("#root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog_create",
    element: <BlogCreatePage />,
  },
  {
    path: "blog/:id",
    element: <BlogPage />,
  },
]);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CategoriesProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </CategoriesProvider>
    </AuthProvider>
  </React.StrictMode>
);
