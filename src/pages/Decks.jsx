import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import DeckCard from "../components/DeckCard";
import { Search } from "flowbite-react-icons/outline";


export default function Decks() {
    return (
        <>
            <NavbarLogged />
            <main className="flex justify-center gap-10 flex-wrap">
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
                <div className="flex flex-wrap gap-10  items-center justify-evenly flex-col lg:flex-row mb-10">
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
            </main>
            <Footer />
        </>
    )
}