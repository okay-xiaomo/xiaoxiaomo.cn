import { createBrowserRouter, type RouteObject } from "react-router";
import { Layout } from "@/views/Layout";
import { Home } from "@/views/Home";
import { Articles } from "@/views/Articles";
import { About } from "@/views/About";
import { Portfolio } from "@/views/Portfolio";

import { NotFound } from "@/views/NotFound";

const mainRoutes: RouteObject[] = [
  {
    id: 'home',
    path: "/",
    element: <Home />,
  },
  {
    id: 'about',
    path: "/about",
    element: <About />,
  },
  {
    id: 'articles',
    path: "/articles",
    element: <Articles />,
  },
  {
    id: 'portfolio',
    path: "/portfolio",
    element: <Portfolio />,
  } 
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [...mainRoutes],
    },
    {
      path: "/not-found",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
  },
);

export default router;
