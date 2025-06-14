import { Plus } from "flowbite-react-icons/outline";
import { File, Tag } from "flowbite-react-icons/solid";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";
import CategoryModal from "./CategoryModal";

export default function FloatingButton({ open, setOpen }) {
    const { openModal } = useContext(ModalContext);

    const navigate = useNavigate();

    const handleNewDeck = (event) =>{
        event.preventDefault();
        navigate('new-deck');

        setOpen(false);
    }

    const handleNewCategory = (event) => {
        event.preventDefault();
        openModal("Criar nova categoria", <CategoryModal/>, () => {
            console.log("Categoria criada!");
        });

        setOpen(false);
    }

    return (
        <div className="right-10 bottom-10 fixed flex flex-col items-end gap-2">
            <div className={`flex flex-col items-end gap-2 transition-all duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button onClick={handleNewDeck} className="cursor-pointer flex items-center gap-2 bg-orange text-oxford-blue px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90">
                    <span>Criar Deck</span>
                    <File className="text-sm" />
                </button>
                <button onClick={handleNewCategory} className="cursor-pointer flex items-center gap-2 bg-orange text-oxford-blue px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90">
                    <span>Criar Categoria</span>
                    <Tag className="text-sm" />
                </button>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer bg-orange text-oxford-blue rounded-full shadow-2xl w-16 h-16 flex items-center justify-center hover:scale-105 transition-transform"
            >
                <span className={`text-2xl transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus />
                </span>
            </button>
        </div>
    );
}