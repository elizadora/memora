import { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function NewCardModal({ onConfirm }) {
    const { closeModal } = useContext(ModalContext);
    const [card, setCard] = useState({
        question: "",
        answer: ""
    });


    const handleCancel = () => {
        closeModal();
    }

    const handleNewCard = async (event) => {
        event.preventDefault();
        onConfirm(card);
        closeModal();
    }

    return (
        <>
            <form onSubmit={handleNewCard} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 font-open-sans">
                        <label className="">Pergunta</label>
                        <textarea value={card.question} onChange={(e) => setCard({...card, question: e.target.value})} className="w-full min-h-40 resize-none p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" placeholder="Adicione a pergunta do seu card..."></textarea>
                    </div>
                    <div className="flex flex-col gap-2 font-open-sans">
                        <label>Resposta</label>
                        <textarea value={card.answer} onChange={(e) => setCard({...card, answer: e.target.value})} className="w-full min-h-40 resize-none p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" placeholder="Adicione a resposta do seu card..."></textarea>
                    </div>
                    <div className="flex justify-end mt-4 font-medium font-roboto-slab">
                        <button onClick={handleCancel} type="button"  className="border-oxford-blue/80 border-4 text-oxford-blue/80 p-2 rounded-md hover:opacity-95 cursor-pointer mr-2">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-oxford-blue text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                            Confirmar
                        </button>
                    </div>
                </form>
        </>
    );
}
