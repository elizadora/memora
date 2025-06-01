import heroImage from '../assets/heroImg.svg';

export default function HeroSection() {
    return (
        <section className="flex mt-28 lg:justify-between lg:px-10 lg:flex-row flex-col items-center lg:items-start gap-10 mb-10">
            <div className="flex flex-col md:w-xl gap-4 items-center text-center lg:text-left">
                <h3 className="text-oxford-blue text-4xl font-medium font-roboto-slab">Domine qualquer assunto com flashcards inteligentes!</h3>
                <p className="lg:text-justify font-open-sans text-2xl text-chacoal">Crie, memorize e revise de forma eficiente, o segredo para aprender mais em menos tempo.</p>
                <button className="whitespace-nowrap rounded-3xl font-roboto-slab font-medium text-base bg-orange mt-6 px-8 py-2 cursor-pointer hover:opacity-90 text-oxford-blue transition ease-in duration-300">Comece Agora</button>
            </div>
            <img src={heroImage} alt="Hero Image" className="lg:w-1/2 w-7/10" />
        </section>
    )
}