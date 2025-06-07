import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function NewCardModal() {
    const { closeModal } = useContext(ModalContext);

    const handleCancel = () => {
        closeModal();
    }

    return (
        <>
            <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 font-open-sans">
                        <label className="">Pergunta</label>
                        <textarea className="w-full min-h-40 resize-none p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" id="" placeholder="Adicione a pergunta do seu card..."></textarea>
                    </div>
                    <div className="flex flex-col gap-2 font-open-sans">
                        <label>Resposta</label>
                        <textarea className="w-full min-h-40 resize-none p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" id="" placeholder="Adicione a resposta do seu card..."></textarea>
                    </div>
                    <div className="flex justify-end mt-4 font-medium font-roboto-slab">
                        <button onClick={handleCancel} type="button"  className="border-oxford-blue/80 border-4 text-oxford-blue/80 p-2 rounded-md hover:opacity-95 cursor-pointer mr-2">
                            Cancelar
                        </button>
                        <button type="submit"  className="bg-oxford-blue text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                            Confirmar
                        </button>
                    </div>
                </form>
        </>
    );
}
