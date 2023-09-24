import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Arcticle from "../pages/Ariticle";
import ArticleDetail from "../pages/ArticleDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/article",
        element: <Arcticle />,
        children: [
          { path: ":id", element: <ArticleDetail /> },
          { path: "create", element: <ArticleDetail /> },
          { path: ":id/edit", element: <ArticleDetail /> },
        ],
      },
    ],
  },
]);

export default router;
