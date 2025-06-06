import { Close } from "flowbite-react-icons/outline";
import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        open: false,
        title: "l",
        message: "",
        onConfirm: () => { }
    });


    const openModal = (title, message, onConfirm) => {
        setModal({
            open: true,
            title,
            message,
            onConfirm
        });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModal({
            open: false,
            title: "",
            message: "",
            onConfirm: () => { }
        });
        document.body.style.overflow = "auto";
    };


    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {modal.open && (
                <div onClick={closeModal} className="fixed inset-0 backdrop-blur-sm flex z-10 justify-center items-center bg-black/25">
                    <div className="bg-white-smoke  p-5 rounded-md lg:w-1/3 w-9/10 flex flex-col gap-5">
                        <div className="flex items-center justify-between border-b pb-2">
                            <p className="text-xl sm:text-2xl font-semibold text-rich-black font-roboto-slab">
                                {modal.title}
                            </p>
                            <button onClick={closeModal} className="text-rich-black/70 hover:text-rich-black transition cursor-pointer">
                            <Close className="w-5 h-5" />
                            </button>
                        </div>
                        <div className=" text-rich-black/90 font-open-sans text-md sm:text-base">
                            <p>{modal.message}</p>
                        </div>
                        <div className="flex gap-4 justify-end font-roboto-slab">
                            <button onClick={closeModal} className="bg-rich-black text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Cancelar</button>
                            <button onClick={() => { modal.onConfirm(); closeModal(); }} className="bg-crimson text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    )

}