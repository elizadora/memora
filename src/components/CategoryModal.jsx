import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { usePostCategory, useUpdateCategory } from '../hooks/useCategories';


export default function CategoryModal({ category }) {

    const { closeModal } = useContext(ModalContext);
    const [categoryName, setCategoryName] = useState('');

    const { mutate : add} = usePostCategory(() => closeModal());
    const { mutate: update } = useUpdateCategory(() => closeModal());

    const handleCancel = () => {
        closeModal();
    }

    const handleSave = async (event) => {
        event.preventDefault();
        
        if(category){
            update({
                id: category.id,
                name: categoryName
            });
        }else{
            add(categoryName);
        }

    }   


    useEffect(() =>{
        if(category){
            setCategoryName(category.name);
        }
    },[category])

    return (
        <>
            <form onSubmit={handleSave} className="flex flex-col gap-4">
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