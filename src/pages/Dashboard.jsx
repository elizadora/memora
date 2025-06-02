import DecksSection from "../components/DecksSection";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import WelcomeSection from "../components/WelcomeSection";

export default function Dashboard(){
    return(
        <div className="flex flex-col min-h-screen gap-20">
            <NavbarLogged />
            <main>
                <WelcomeSection />
                <DecksSection />
            </main>
            <Footer />
        </div>
    )
}