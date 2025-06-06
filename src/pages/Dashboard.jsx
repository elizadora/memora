import { useState } from "react";
import DecksSection from "../components/DecksSection";
import WelcomeSection from "../components/WelcomeSection";
import FloatingButton from "../components/FloatingButton";

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <main>
                <WelcomeSection />
                <DecksSection />
                <FloatingButton open={open} setOpen={setOpen} />
            </main>
        </>
    )
}