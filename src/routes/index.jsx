import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Home from "../pages/Home";
import Access from "../pages/Access";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import NewDeck from "../pages/NewDeck";
import { PrivateRoute } from "./PrivateRoute";
import DetailsDeck from "../pages/DetailsDeck";

// Lazy loading the components to improve performance
const Decks = lazy(() => import("../pages/Decks"));
const Categories = lazy(() => import("../pages/Categories"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Access type="login"/>} />
                <Route path="/register" element={<Access type="register"/>} />
                <Route path="/dashboard" element={<PrivateRoute component={AuthenticatedLayout} />}>
                    <Route path="" element={<Dashboard/>} />
                    <Route path="decks" element={<Decks/>} />
                    <Route path="categories" element={<Categories/>} />
                    <Route path="account" element={<Account/>} />
                    <Route path="new-deck" element={<NewDeck/>} />
                    <Route path="details-deck/:id" element={<DetailsDeck/>} />
                </Route>
            </Routes>
        </Suspense>
    )
}