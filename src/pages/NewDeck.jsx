import CreatableSelect from "react-select/creatable";
import Footer from "../components/Footer";
import NavbarLogged from "../components/NavbarLogged";
import { selectClassNamesCustom } from "../styles/createblaSelect";
import { CirclePlus } from "flowbite-react-icons/outline";


export default function NewDeck() {
    const categoryOptions = [
        { value: 'matematica', label: 'Matemática' },
        { value: 'portugues', label: 'Português' },
        { value: 'historia', label: 'História' },
        { value: 'geografia', label: 'Geografia' },
        { value: 'ingles', label: 'Inglês' },
    ];

    return (
        <>
            <main className="flex justify-center items-center">
                {/* deck card - forms*/}
                <div className="flex flex-col  gap-7 lg:w-1/2 bg-white-smoke shadow-md p-10 rounded-md w-9/10">
                    {/* deck inputs */}
                    <div className="flex flex-col gap-10">
                        <input className="p-4 border-2 border-rich-black rounded-md font-roboto-slab font-bold text-2xl text-oxford-blue placeholder:text-oxford-blue/80" type="text" placeholder="Novo deck" />
                        <textarea className="min-h-44 resize-none p-4 border-2 border-rich-black rounded-md font-open-sans text-xl text-oxford-blue placeholder:text-oxford-blue/80" name="deck-description" id="" placeholder="Adicione a descrição do seu deck aqui..."></textarea>
                        <CreatableSelect isMulti unstyled placeholder="Categoria" options={categoryOptions} classNames={selectClassNamesCustom} />
                    </div>
                    {/* card */}
                    <div className="flex cursor-pointer items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
                        <CirclePlus className="w-12 h-12 text-rich-black" />
                    </div>
                </div>
            </main>
        </>
    )
}