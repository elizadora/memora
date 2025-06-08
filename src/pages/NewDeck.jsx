import CreatableSelect from "react-select/creatable";
import { selectClassNamesCustom } from "../styles/createblaSelect";
import { CirclePlus } from "flowbite-react-icons/outline";
import { NewCardModal } from "../components/NewCardModal";
import { useEffect, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";


export default function NewDeck() {
    const { openModal } = useContext(ModalContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [deck, setDeck] = useState({
        title: "",
        description: "",
        category: []
    });


    const handleSelectedCategories = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    }

    const fecthCategories = async () => {
        try {
            const condition = query(collection(db, "categories"), where("userId", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(condition);

            const data = querySnapshot.docs.map((doc) => ({ value: doc.id, label: doc.data().name }));
            setCategories(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthCategories();
    }, []);

    function handleNewCard() {
        openModal("Criar novo card", <NewCardModal />, () => {
            console.log("Card criado!");
        });
    }

    const handleNewDeck = async (event) => {
        event.preventDefault();

        try {
            // create deck 
            const deckRef = await addDoc(collection(db, "decks"), {
                title: deck.title,
                description: deck.description,
                userId: auth.currentUser.uid
            });

            const deckIdNew = deckRef.id;

            const categoriesRef = [];

            // create categories
            for (const category of selectedCategories) {
                if (category.label == category.value) {
                    const categoryRef = await addDoc(collection(db, "categories"), {
                        name: category.label,
                        userId: auth.currentUser.uid
                    });

                    categoriesRef.push({
                        id: categoryRef.id,
                        name: category.label
                    });
                }else{
                    categoriesRef.push({
                        id: category.value,
                        name: category.label
                    }); 
                }
            }


                console.log(categoriesRef);
                // add decks_categories
                for (const category of categoriesRef) {
                    await addDoc(collection(db, "decks_categories"), {
                        deckId: deckIdNew,
                        categoryId: category.id
                    });
                }
                // reset form
                setDeck({
                    title: "",
                    description: "",
                });

                setSelectedCategories([]);
                alert("Deck criado com sucesso!");
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
                            <CreatableSelect value={selectedCategories} onChange={handleSelectedCategories} isMulti unstyled placeholder="Categoria" options={categories} classNames={selectClassNamesCustom} required />
                        </div>
                        {/* card */}
                        <div onClick={handleNewCard} className="flex cursor-pointer items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
                            <CirclePlus className="w-12 h-12 text-rich-black" />
                        </div>
                        <button className="bg-oxford-blue text-white-smoke font-bold py-4 px-4 rounded-md hover:bg-rich-black transition-colors duration-300 cursor-pointer">Criar deck</button>
                    </form>
                </main>
            </>
        )
    }