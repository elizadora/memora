import { Close } from "flowbite-react-icons/outline";

export function NewCardModal({ isOpen, onClose, onSubmit }) {

    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <div className={`fixed inset-0 flex bg-black/25 items-center justify-center backdrop-blur-sm z-10 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white-smoke  p-5 rounded-md lg:w-1/3 w-9/10 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <p className="text-xl sm:text-2xl font-semibold text-rich-black font-roboto-slab">Crie seu novo card</p>
                    <button onClick={onClose} className="text-rich-black/70 hover:text-rich-black transition cursor-pointer">
                        <Close className="w-5 h-5" />
                    </button>
                </div>
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
                        <button type="button" onClick={onClose} className="border-oxford-blue/80 border-4 text-oxford-blue/80 p-2 rounded-md hover:opacity-95 cursor-pointer mr-2">
                            Cancelar
                        </button>
                        <button type="submit" onClick={onSubmit} className="bg-oxford-blue text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
