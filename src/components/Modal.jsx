import { Close } from "flowbite-react-icons/outline";
import { useState } from "react";

export default function Modal({open, onClose}) {
    return (
        <div onClick={onClose} className={`fixed inset-0  backdrop-blur-sm flex justify-center items-center ${open ? 'visible bg-black/25' : 'invisible'}`}>
            <div className="bg-white-smoke p-5 rounded-md lg:w-1/3 w-9/10 flex flex-col gap-5">
                <div>
                    <p className="flex justify-between">Titulo <Close /> </p>
                    <hr className="text-chacoal" />
                </div>
                <div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex gap-4 justify-end">
                    <button>Cancelar</button>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    );
}