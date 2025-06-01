import benefitsImage from '../assets/benefitsImage.svg'

export default function BenefitsSection() {
    return (
        <section className="flex mt-28 lg:justify-between px-8 lg:px-10 lg:flex-row flex-col items-center lg:items-start gap-10 mb-10">
            <div className="flex flex-col md:w-xl gap-4 text-center lg:text-left">
                <h3 className="text-oxford-blue text-4xl font-medium font-roboto-slab">Quais os benefícios de usar flashcards?</h3>
                <ul className="list-disc text-left font-open-sans text-xl text-chacoal md:px-4 px-10">
                    <li>Memorização mais rápida</li>
                    <li>Revisão eficiente</li>
                    <li>Estudo em qualquer lugar</li>
                    <li>Aprendizado personalizado</li>
                </ul>

            </div>
            <img src={benefitsImage} alt="Hero Image" className="lg:w-1/2 w-7/10" />
        </section>
    );
}