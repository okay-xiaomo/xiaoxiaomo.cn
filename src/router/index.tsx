import { Suspense } from "react";
import { createBrowserRouter, type RouteObject } from "react-router";
import { Layout } from "./lazyViews";
import { Loading } from "@/components/Loading";
import { Home } from "@/views/Home";
import { Articles } from "@/views/Articles";
import { About } from "@/views/About";
import { Portfolio } from "@/views/Portfolio";
import { NotFound } from "@/views/NotFound";

const mainRoutes: RouteObject[] = [
  {
    id: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "about",
    path: "/about",
    element: <About />,
  },
  {
    id: "articles",
    path: "/articles",
    element: <Articles />,
  },
  {
    id: "portfolio",
    path: "/portfolio",
    element: <Portfolio />,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
      children: [...mainRoutes],
    },
    {
      path: "/not-found",
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
  ],
  {
    basename: "/",
  },
);

export default router;
