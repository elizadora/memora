// routesConfig.jsx
import { lazy } from "react";

// const Home = lazy(() => import("../pages/Home"));
// const Access = lazy(() => import("../pages/Access"));

import Home from "../pages/Home";
import Access from "../pages/Access";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
    isPublic: true,
  },
  {
    path: "/login",
    element: <Access type="login" />,
    isPublic: true,
  },
  {
    path: "/register",
    element: <Access type="register" />,
    isPublic: true,
  },
];

export default routesConfig;