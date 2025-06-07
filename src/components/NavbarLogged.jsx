import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DialogContext } from "../context/DialogContext";

export default function NavbarLogged() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openDialog } = useContext(DialogContext);
    

    function handleLogout(){
        openDialog(
            "Sair",
            "Tem certeza que deseja sair?",
            () => {
                console.log("Usuário deslogado");
            }
        );
    }
    

    return (
        <header className="flex justify-between items-center bg-oxford-blue z-10 text-platium drop-shadow-md py-6 px-8 lg:px-10 font-roboto-slab">
            <h1 className="font-bold text-[28px]">MEMORA</h1>
            <div className="hidden max-w-[500px] lg:flex items-center justify-end gap-7 w-1/3 font-medium">
                <Link to="/dashboard" className="transition duration-300 ease-in hover:underline underline-offset-4">Home</Link>
                <Link to="decks" className="transition duration-300 ease-in hover:underline underline-offset-4">Decks</Link>
                <Link to="categories" className="transition duration-300 ease-in hover:underline underline-offset-4">Categorias</Link>
                <Link to="account" className="transition duration-300 ease-in hover:underline underline-offset-4">Conta</Link>
                <button onClick={handleLogout} className="max-w-24 flex-1 rounded-xl text-base bg-orange px-8 py-2 cursor-pointer hover:opacity-90 text-oxford-blue transition ease-in duration-300">Sair</button>
            </div>
            <svg className="w-10 h-10 cursor-pointer lg:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>

            <div className={`absolute lg:hidden top-20 left-0 w-full bg-oxford-blue transform transition-transform flex items-center flex-col gap-7 p-10
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>

                <Link to="/dashboard" className="transition duration-300 ease-in hover:underline underline-offset-4">Home</Link>
                <Link to="decks" className="transition duration-300 ease-in hover:underline underline-offset-4">Decks</Link>
                <Link to="categories" className="transition duration-300 ease-in hover:underline underline-offset-4">Categorias</Link>
                <Link to="account" className="transition duration-300 ease-in hover:underline underline-offset-4">Conta</Link>
                <button onClick={handleLogout} className="w-40 rounded-xl bg-orange px-10 py-2 cursor-pointer hover:opacity-95 text-oxford-blue transition ease-in duration-300">Sair</button>
            </div>
        </header>
    )
}