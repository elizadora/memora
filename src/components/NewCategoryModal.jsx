import { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebaseConfig';

export default function NewCategoryModal() {
    const { closeModal } = useContext(ModalContext);

    const [categoryName, setCategoryName] = useState('');

    const handleCancel = () => {
        closeModal();
    }

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await addDoc(collection(db, "categories"), {
                name: categoryName,
                userId: auth.currentUser.uid,
            });

            alert("Categoria criada com sucesso!");
            closeModal();

        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            alert("Erro ao criar categoria. Tente novamente.");
            return;
        }

    }

    return (
        <>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 font-open-sans">
                    <label>Nome da Categoria</label>
                    <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="w-full p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" placeholder="Adicione o nome da nova categoria..." required />
                </div>
                <div className="flex justify-end mt-4 font-medium font-roboto-slab">
                    <button onClick={handleCancel} type="button" className="border-oxford-blue/80 border-4 text-oxford-blue/80 p-2 rounded-md hover:opacity-95 cursor-pointer mr-2">
                        Cancelar
                    </button>
                    <button type="submit" className="bg-oxford-blue text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                        Confirmar
                    </button>
                </div>
            </form>
        </>
    )
}