import { Edit, TrashBin } from "flowbite-react-icons/outline";
import { useDecksCategories } from "../hooks/useDecksCategories";
import { useNavigate } from "react-router-dom";
import { useDeleteDeck } from "../hooks/useDecks";
import { useContext } from "react";
import { DialogContext } from "../context/DialogContext";

export default function DeckCard({ deck }) {

    const { data, isLoading } = useDecksCategories(deck.id);
    const {mutate: deleteDeck } = useDeleteDeck();
    
    const navigate = useNavigate();
    const {openDialog} = useContext(DialogContext);

    const handleSeeDetails = () =>{
        navigate(`/dashboard/details-deck/${deck.id}`);
    }

    const handleDeleteDeck = (event) =>{
        event.stopPropagation();
        openDialog(
            "Excluir Deck",
            "Tem certeza que deseja excluir este deck? Esta ação não pode ser desfeita.",
            async () => {
                try {
                    await deleteDeck(deck.id);
                } catch (error) {
                    console.error("Erro ao excluir o deck:", error);
                }
            }
        );
    }

    return (
        <div onClick={handleSeeDetails} className="bg-white-smoke lg:w-1/3 w-9/10 p-8 rounded-xl shadow-md lg:min-w-[515px] lg:min-h-[200px] cursor-pointer hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between">
                <p className="font-roboto-slab text-rich-black text-2xl">{deck.title}</p>
                <div className="flex gap-2">
                    <button className="rounded-xl bg-oxford-blue text-white-smoke px-3 py-2 hover:bg-oxford-blue/90 hover:cursor-pointer"><Edit /></button>
                    <button onClick={(e) => handleDeleteDeck(e)}  className="rounded-xl bg-crimson text-white-smoke px-3 py-2 hover:bg-crimson/90 hover:cursor-pointer"><TrashBin /></button>
                </div>
            </div>
            <p className="text-rich-black font-open-sans text-[18px] mt-5">{deck.description}</p>
            <div className="mt-5">
                {isLoading ? (
                    <p className="text-oxford-blue/80 text-lg font-open-sans">Carregando categorias...</p>
                ) : data.length > 0 ? (
                    data.map((category) => (
                        <span key={category.id} className="bg-rich-black/80 text-white-smoke px-3 py-1 rounded-full mr-2 mb-2 text-sm">{category.name}</span>
                    ))
                ) : (
                    <p className="text-oxford-blue/60 text-lg font-open-sans">Nenhuma categoria associada.</p>
                )}
            </div>
        </div>
    )
}