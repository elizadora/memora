import { useContext, useEffect, useState } from "react";
import { selectClassNamesCustom } from "../styles/createblaSelect";
import CreatableSelect from "react-select/creatable";
import { useFetchCategories } from "../hooks/useCategories";
import { useDecksCategories } from "../hooks/useDecksCategories";
import { ModalContext } from "../context/ModalContext";
import { useUpdateDeck } from "../hooks/useDecks";


export default function DeckModal({ deck }) {
    const [deckData, setDeckData] = useState(deck);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { closeModal } = useContext(ModalContext);

    const {mutate : edit} = useUpdateDeck(deck.id);
    
    
    // get all categories
    const { data : categories } = useFetchCategories();

    // get categories with deck id
    const {data : categoriesDeck} = useDecksCategories(deck.id);
    
    // get deck categories
    const localCategories = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

    // set selected categories from deck
    useEffect(() => {
            const selected = categoriesDeck.map((category) => ({
                value: category.id,
                label: category.name,
            }));
            setSelectedCategories(selected);
        
    },[])

    const handleCancel = () =>{
        closeModal();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        edit(deckData);
    }
    


    return (
        <>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 font-open-sans">
                    <label className="">Título</label>
                    <input value={deckData.title} onChange={(e) => setDeckData({ ...deckData, title: e.target.value })} type="text" className="w-full p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" placeholder="Adicione o titulo do deck..." required />
                </div>
                <div className="flex flex-col gap-2 font-open-sans">
                    <label>Descrição</label>
                    <textarea value={deckData.description} onChange={(e) => setDeckData({ ...deckData, description: e.target.value })} className="w-full min-h-40 resize-none p-4 border-2 border-rich-black rounded-md text-md text-oxford-blue placeholder:text-oxford-blue/80" placeholder="Adicione a resposta do seu card..."></textarea>

                </div>
                <div className="flex flex-col gap-2 font-open-sans">
                    <label>Categorias</label>
                        <CreatableSelect value={selectedCategories} onChange={(options) => setSelectedCategories(options)} isMulti unstyled placeholder="Categoria" options={localCategories} classNames={selectClassNamesCustom} required />
                </div>
                <div className="flex justify-end mt-4 font-medium font-roboto-slab">
                    <button onClick={handleCancel} type="button" className="border-oxford-blue/80 border-4 text-oxford-blue/80 p-2 rounded-md hover:opacity-95 cursor-pointer mr-2">
                        Cancelar
                    </button>
                    <button onClick={(e) => handleSubmit(e)} type="submit" className="bg-oxford-blue text-white-smoke p-2 rounded-md hover:opacity-95 cursor-pointer">
                        Confirmar
                    </button>
                </div>
            </form>
        </>
    );
}
