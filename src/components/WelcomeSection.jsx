import welcomeImage from '../assets/welcomeImage.svg';


export default function WelcomeSection() {
    return (
        <section className="flex mt-20 lg:justify-between lg:px-10 lg:flex-row flex-col items-center lg:items-start gap-10 mb-10 px-2">
            <div className="flex flex-col md:w-xl gap-4 items-center text-center lg:text-left">
                <h3 className="text-oxford-blue md:text-4xl text-3xl font-medium font-roboto-slab">Domine qualquer assunto com flashcards inteligentes!</h3>
                <p className="lg:text-justify font-open-sans md:text-2xl text-xl text-chacoal">Crie, memorize e revise de forma eficiente, o segredo para aprender mais em menos tempo.</p>
                <div className="flex gap-8 items-center">
                    <button className="whitespace-nowrap rounded-3xl font-roboto-slab font-medium text-base bg-orange mt-6 px-8 py-2 cursor-pointer hover:opacity-90 text-oxford-blue transition ease-in duration-300">Criar Deck</button>
                    <button className="whitespace-nowrap rounded-3xl font-roboto-slab font-medium text-base border-orange border-3 mt-6 px-8 py-2 cursor-pointer hover:bg-orange text-oxford-blue transition ease-in duration-300">Criar Categoria</button>
                </div>
            </div>
            <img src={welcomeImage} alt="Welcome Image" className="lg:w-1/2 w-7/10" />
        </section>
    )
}