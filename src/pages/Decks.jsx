import DeckCard from "../components/DeckCard";
import { Search } from "flowbite-react-icons/outline";
import { useFetchDecks } from "../hooks/useDecks";


export default function Decks() {
    const {data, isLoading} = useFetchDecks();

    return (
        <>
            <main className="flex justify-center gap-20 flex-wrap">
                <div className="mt-8">
                    <div className="relative">
                        <input type="text" className="pl-10 py-2 w-sm border-2 border-gray-400 lg:w-2xl rounded-3xl bg-white-smoke" placeholder="Ex: Deck Estudo" />
                        <div className="absolute inset-y-0 right-0 pr-3  flex items-center pointer-events-none">
                            <Search className="text-oxford-blue" />
                        </div>
                    </div>

                    <select className="bg-white-smoke text-oxford-blue float-end py-2 px-3 mt-5 rounded-3xl">
                        <option>Categoria 1</option>
                    </select>
                </div>
                <div className="w-full flex flex-wrap gap-10  items-center justify-evenly flex-col lg:flex-row mb-10">
                    {isLoading ? (
                        <p className="text-oxford-blue text-xl">Carregando...</p>
                    ) : data.length > 0 ? (
                        data.map((deck) => (
                            <DeckCard
                                key={deck.id}
                                deck={deck}
                            />
                        ))
                    ) : (
                        <p className="text-oxford-blue text-xl">Nenhum deck cadastrado</p>
                    )}
                </div>
            </main>
        </>
    )
}