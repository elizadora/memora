import { useNavigate, useParams } from "react-router-dom";
import { useDeckData, useDeleteDeck } from "../hooks/useDecks";
import { Check, CirclePlus, Edit, TrashBin } from "flowbite-react-icons/outline";
import Card from "../components/Card";
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { NewCardModal } from "../components/NewCardModal";
import { useCreateCard } from "../hooks/useCards";
import { DialogContext } from "../context/DialogContext";


export default function DetailsDeck() {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);

    const { openModal } = useContext(ModalContext);
    const { openDialog } = useContext(DialogContext);

    const { mutate: deleteDeck } = useDeleteDeck();
    const { mutate: addCard } = useCreateCard(id);

    const { deck, cards, categories, isLoading } = useDeckData(id);
    const navigate = useNavigate();

    const handleCreateCard = () => {
        openModal("Criar novo card", <NewCardModal onConfirm={(card) => addCard({ deckId: id, card })} />, () => {
            console.log("Card criado!");
        });
    }

    const handleDeleteDeck = (event) => {
        event.stopPropagation();
        openDialog(
            "Excluir Deck",
            "Tem certeza que deseja excluir este deck? Esta ação não pode ser desfeita.",
            async () => {
                try {
                    await deleteDeck(deck.id);
                    navigate("/dashboard/decks");

                } catch (error) {
                    console.error("Erro ao excluir o deck:", error);
                }
            }
        );
    }

    return (
        <>
            <main className="flex justify-center items-center">
                {isLoading ? (
                    <div className="text-center text-oxford-blue text-xl">
                        <p>Carregando...</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:w-7/10 gap-7 bg-white-smoke shadow-md p-10 rounded-md w-9/10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-oxford-blue text-4xl">{deck.title}</h2>
                            <div className="flex gap-2">

                                {editMode ?

                                    <button onClick={() => setEditMode(false)} className="rounded-xl bg-oxford-blue text-white-smoke px-3 py-2 hover:bg-oxford-blue/90 cursor-pointer"><Check /></button>
                                    :
                                    <button onClick={() => setEditMode(true)} className="rounded-xl bg-oxford-blue text-white-smoke px-3 py-2 hover:bg-oxford-blue/90 cursor-pointer"><Edit /></button>

                                }
                                <button onClick={(e) => handleDeleteDeck(e)} className="rounded-xl bg-crimson text-white-smoke px-3 py-2 hover:bg-crimson/90 cursor-pointer"><TrashBin /></button>
                            </div>
                        </div>
                        <p className="text-oxford-blue text-2xl">{deck.description}</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {categories.length > 0 ? (
                                    categories.map((category) => (
                                        <span key={category.id} className="bg-oxford-blue text-white-smoke px-3 py-1 rounded-full text-sm">
                                            {category.name}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-rich-black text-lg">Nenhuma categoria associada a este deck.</p>
                                )}
                            </div>
                            <div className="flex justify-start border-t border-oxford-blue/20 pt-4">
                                <button className="bg-rich-black text-white px-4 py-2 rounded-md hover:bg-dark-blue transition-colors">
                                    Estudar Deck
                                </button>
                            </div>
                            <div className="flex flex-row gap-16 pt-4 flex-wrap justify-start">
                                {cards.length > 0 ? (
                                    cards.map((card) => (
                                        <Card key={card.id} question={card.question} answer={card.answer} />
                                    ))
                                ) : (
                                    <p className="text-rich-black text-lg w-full">Nenhum card encontrado para este deck.</p>
                                )}
                                <div onClick={handleCreateCard} className="flex cursor-pointer items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
                                    <CirclePlus className="w-12 h-12 text-rich-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}