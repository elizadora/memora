import { useState } from "react";
import DecksSection from "../components/DecksSection";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import WelcomeSection from "../components/WelcomeSection";
import FloatingButton from "../components/FloatingButton";

export default function Dashboard(){
    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-col min-h-screen gap-20">
            <NavbarLogged />
            <main>
                <WelcomeSection />
                <DecksSection />
                <FloatingButton open={open} setOpen={setOpen} />
            </main>
            <Footer />
        </div>
    )
}