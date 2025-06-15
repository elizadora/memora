import { Link } from "react-router-dom";
import { useFetchFirst } from "../hooks/useDecks";
import DeckCard from "./DeckCard";

export default function DecksSection() {
    const {data, isLoading} = useFetchFirst();
    console.log(data);


    return (
        <section className="w-full flex justify-center flex-col items-center gap-12 mt-28 pb-28">
            <h3 className="font-roboto-slab md:text-4xl text-3xl  text-rich-black font-medium mt-10 mb-10">Meus Decks</h3>
            <div className="flex flex-wrap gap-10  items-center justify-evenly flex-col lg:flex-row w-full">
                {isLoading ? (
                    <p className="text-oxford-blue text-xl">Carregando...</p>
                ) : data.length > 0 ? (
                    data.map((deck) => (
                        console.log(deck),
                        <DeckCard
                            key={deck.id}
                            title={deck.title}
                            description={deck.description}
                            category= "teste"
                        />
                    ))
                ) : (
                    <p className="text-oxford-blue text-xl">Nenhum deck cadastrado</p>
                )}
            </div>
            <Link to={'decks'} className="font-open-sans underline cursor-pointer text-oxford-blue text-2xl">Ver mais</Link>
        </section>
    )
}