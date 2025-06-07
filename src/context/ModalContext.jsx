import { Close } from "flowbite-react-icons/outline";
import { createContext, useState } from "react";


export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        open: false,
        title: "",
        content: null
    });

    const openModal = (title, content) => {
        setModal({
            open: true,
            title,
            content
        });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModal({
            open: false,
            title: "",
            content: null
        });
        document.body.style.overflow = "auto";
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {modal.open && (
                <div onClick={closeModal} className="fixed inset-0 backdrop-blur-sm flex z-10 justify-center items-center bg-black/25">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white-smoke p-5 rounded-md lg:w-1/3 w-9/10 flex flex-col gap-5">
                        <div className="flex items-center justify-between pb-2">
                            <p className="text-xl sm:text-2xl font-semibold text-rich-black font-roboto-slab">
                                {modal.title}
                            </p>
                            <button onClick={closeModal} className="text-rich-black/70 hover:text-rich-black transition cursor-pointer">
                                <Close className="w-5 h-5" />
                            </button>
                        </div>
                        {modal.content}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
}