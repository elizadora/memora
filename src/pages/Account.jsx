import { UserCircle } from "flowbite-react-icons/solid";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Account() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen gap-20">
            <NavbarLogged />
            <main className="flex justify-center items-center">
                <div className="bg-white-smoke flex flex-col items-center p-10 rounded-md gap-10 md:w-1/3 max-w-9/10 shadow-md">
                    <div className="flex items-center justify-center w-full">
                        <UserCircle className="w-1/4 h-2/5 text-rich-black" />
                    </div>
                    <form className="flex flex-col items-center justify-center gap-6 w-full">
                        <input className="w-full bg-platium text-gray-500 p-2 rounded-md" type="text" placeholder="Texto" />
                        <input className="w-full bg-platium text-gray-500 p-2 rounded-md" type="text" placeholder="Texto" />
                        <input className="w-full bg-platium text-gray-500 p-2 rounded-md" type="text" placeholder="Texto" />
                        <input className="w-full bg-platium text-gray-500 p-2 rounded-md" type="text" placeholder="Texto" />
                        <div className="flex flex-col gap-3 w-full">
                            <button className="bg-rich-black text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Editar</button>
                            <button type="button" className="bg-crimson text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer" onClick={() => setOpen(true)}>Apagar Conta</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
            <Modal open={open} onClose={() => setOpen(false)}/>
        </div>
    );
}
