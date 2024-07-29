import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Blogpage from "./pages/Blogpage";
import Layout from "./Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/create", element: <Create /> },
      { path: "/update/:id", element: <Update /> },
      { path: "/blogpage/:id", element: <Blogpage /> },
    ],
  },
]);
