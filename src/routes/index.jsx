import { Route, Routes } from "react-router-dom";

import routesConfig from "./config";
import { Suspense } from "react";

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
                {routesConfig.map(route => {
                    return <Route path={route.path} element={route.element} />
                })}
            </Routes>
        </Suspense>
    )
}