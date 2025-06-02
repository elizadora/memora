import DeckCard from "./DeckCard";

export default function DecksSection() {
    return (
        <section className="w-full flex justify-center flex-col items-center gap-12 mt-28 pb-28">
            <h3 className="font-roboto-slab md:text-4xl text-3xl  text-rich-black font-medium mt-10 mb-10">Meus Decks</h3>
            <div className="flex flex-wrap gap-10  items-center justify-evenly flex-col lg:flex-row">
                <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DeckCard title="Deck1" category="Category 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
            <a className="font-open-sans underline cursor-pointer text-oxford-blue text-2xl">Ver mais</a>
        </section>
    )
}