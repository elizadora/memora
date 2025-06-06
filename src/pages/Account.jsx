import { UserCircle } from "flowbite-react-icons/solid";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function Account() {
    const { openModal } = useContext(ModalContext);

    function handleDelteAccount() {
        openModal(
            "Apagar Conta",
            "Tem certeza que deseja apagar sua conta? Esta ação não pode ser desfeita.",
            () => {
                console.log("Conta apagada");
            }
        );
    }


    return (
        <>
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
                        <div className="flex flex-col gap-3 w-full font-roboto-slab">
                            <button className="bg-rich-black text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Editar</button>
                            <button onClick={handleDelteAccount} type="button" className="bg-crimson text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Apagar Conta</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
