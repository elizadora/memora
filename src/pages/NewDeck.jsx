import CreatableSelect from "react-select/creatable";
import { selectClassNamesCustom } from "../styles/createblaSelect";
import { CirclePlus } from "flowbite-react-icons/outline";
import { NewCardModal } from "../components/NewCardModal";
import { useEffect, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";
import Card from "../components/Card";
import { useCreateDeck } from "../hooks/useDecks";
import { useFetchCategories } from "../hooks/useCategories";


export default function NewDeck() {
    const { openModal } = useContext(ModalContext);
    const [cards, setCards] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const [deck, setDeck] = useState({
        title: "vai",
        description: "vai",
        category: []
    });
    
    const {mutate: addDeck, isSuccess} = useCreateDeck();
    const { data : categories } = useFetchCategories();
    const localCategories = categories?.map(category => ({
        value: category.id,
        label: category.name
    })) || [];
    



    const handleSelectedCategories = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    }

    function handleNewCard() {
        console.log(cards);
        openModal("Criar novo card", <NewCardModal onConfirm={(card) => {
            setCards([...cards, card]);
        }} />, () => {
            console.log("Card criado!");
        });
    }

    const handleNewDeck = async (event) => {
        event.preventDefault();

        try {

            await addDeck({deck, categories: selectedCategories, cards});

            setDeck({ title: "", description: "" });
            setSelectedCategories([]);
            setCards([]);
        } catch (error) {
            console.error("Erro ao criar deck:", error);
            alert("Erro ao criar deck. Tente novamente.");
        }
    }


    return (
        <>
            <main className="flex justify-center items-center">
                {/* deck card - forms*/}
                <form onSubmit={handleNewDeck} className="flex flex-col  gap-7 lg:w-1/2 bg-white-smoke shadow-md p-10 rounded-md w-9/10">
                    {/* deck inputs */}
                    <div className="flex flex-col gap-10">
                        <input value={deck.title} onChange={(e) => setDeck({ ...deck, title: e.target.value })} className="p-4 border-2 border-rich-black rounded-md font-roboto-slab font-bold text-2xl text-oxford-blue placeholder:text-oxford-blue/80" type="text" placeholder="Novo deck" required />
                        <textarea value={deck.description} onChange={(e) => setDeck({ ...deck, description: e.target.value })} className="min-h-44 resize-none p-4 border-2 border-rich-black rounded-md font-open-sans text-xl text-oxford-blue placeholder:text-oxford-blue/80" name="deck-description" id="" placeholder="Adicione a descrição do seu deck aqui..." required></textarea>

                        <CreatableSelect value={selectedCategories} onChange={handleSelectedCategories} isMulti unstyled placeholder="Categoria" options={localCategories} classNames={selectClassNamesCustom} required />
                    </div>
                    {/* card */}
                    <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
                        <div onClick={handleNewCard} className="flex cursor-pointer items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
                            <CirclePlus className="w-12 h-12 text-rich-black" />
                        </div>

                        <div className=" w-full flex flex-wrap lg:justify-start items-center justify-center lg:gap-x-20 gap-4">
                            {cards.length > 0 ? (
                                cards.map((card, index) => (
                                    <Card key={index} question={card.question} answer={card.answer} onMode={() => setCards((prevCards) => prevCards.filter((item, indexCard) => index !== indexCard))} />
                                ))
                            ) : (
                                <p className="text-oxford-blue/80 text-lg font-open-sans">Nenhum card criado ainda.</p>
                            )}
                        </div>
                    </div>
                    <button className="bg-oxford-blue text-white-smoke font-bold py-4 px-4 rounded-md hover:bg-rich-black transition-colors duration-300 cursor-pointer">Criar deck</button>
                </form>
            </main>
        </>
    )
}