import benefitsImage from '../assets/benefitsImage.svg'

export default function BenefitsSection() {
    return (
        <section className="flex mt-28 lg:justify-around px-8 lg:flex-row flex-col items-center lg:items-start gap-10 mb-10">
            <div className="flex flex-col md:w-xl gap-4 text-center lg:text-left">
                <h3 className="text-oxford-blue md:text-4xl text-3xl font-medium font-roboto-slab">Quais os benefícios de usar flashcards?</h3>
                <ul className="list-disc text-left font-open-sans md:text-xl text-[18px] text-chacoal md:px-4 px-10">
                    <li>Memorização mais rápida</li>
                    <li>Revisão eficiente</li>
                    <li>Estudo em qualquer lugar</li>
                    <li>Aprendizado personalizado</li>
                </ul>

            </div>
            <img src={benefitsImage} alt="Hero Image" className="lg:w-1/3 w-7/10" />
        </section>
    );
}