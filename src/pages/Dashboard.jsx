import DecksSection from "../components/DecksSection";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import WelcomeSection from "../components/WelcomeSection";

export default function Dashboard(){
    return(
        <>
            <NavbarLogged />
            <main>
                <WelcomeSection />
                <DecksSection />
            </main>
            <Footer />
        </>
    )
}