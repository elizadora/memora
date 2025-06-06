import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import FloatingButton from "../components/FloatingButton";

import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function AuthenticatedLayout() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen gap-20">
            <NavbarLogged />

            <Outlet />

            <FloatingButton open={open} setOpen={()=>setOpen(!open)} />
            <Footer />
        </div>
    )
}