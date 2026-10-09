import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Layout from "../components/Layout/Layout";
import PostDetails from "../pages/PostDetails/PostDetails";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "blog/:slug", element: <PostDetails /> },
    ],
  },
]);
