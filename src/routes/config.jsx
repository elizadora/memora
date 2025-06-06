import { lazy } from "react";

import Home from "../pages/Home";
import Access from "../pages/Access";
import Account from "../pages/Account";
import Dashboard from "../pages/Dashboard";
import NewDeck from "../pages/NewDeck";

// using lazy to made loading page
const Decks = lazy(() => import("../pages/Decks"));
const Categories = lazy(() => import("../pages/Categories"));

const routesConfig = [
  {
    path: '/',
    element: <Home />,
    isPublic: true,
  },
  {
    path: '/login',
    element: <Access type='login' />,
    isPublic: true,
  },
  {
    path: '/register',
    element: <Access type='register' />,
    isPublic: true,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    isPublic: true,
  },
  {
    path: '/decks',
    element: <Decks />,
    isPublic: true,
  },
  {
    path: '/categories',
    element: <Categories />,
    isPublic: true,
  },
  {
    path: '/account',
    element: <Account />,
    isPublic: true,
  },
  {
    path: '/new-deck',
    element: <NewDeck />,
    isPublic: true,
  },
];

export default routesConfig;