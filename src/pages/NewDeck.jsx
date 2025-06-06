import CreatableSelect from "react-select/creatable";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";

export default function NewDeck() {
    return (
        <div className="flex flex-col min-h-screen gap-20">
            <NavbarLogged />
            <main className="flex justify-center items-center">
                {/* deck card - forms*/}
                <div className="lg:w-1/2 bg-white-smoke shadow-md p-10 rounded-md w-9/10">
                    {/* deck inputs */}
                    <div className="flex flex-col gap-10">
                        <input className="p-4 border-2 border-rich-black rounded-md font-roboto-slab font-bold text-2xl text-oxford-blue placeholder:text-oxford-blue/80" type="text" placeholder="Novo deck" />
                        <textarea className="min-h-44 resize-none p-4 border-2 border-rich-black rounded-md font-open-sans text-xl text-oxford-blue placeholder:text-oxford-blue" name="deck-description" id="" placeholder="Adicione a descrição do seu deck aqui..."></textarea>
                        <CreatableSelect isMulti className="border-2 border-rich-black rounded-md font-open-sans text-xl" placeholder="Categoria"/>
                    </div>
                    {/* card */}
                    <div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}