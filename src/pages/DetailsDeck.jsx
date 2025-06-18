import { useParams } from "react-router-dom";
import { useFetchDeckById } from "../hooks/useDecks";
import { CirclePlus, Edit, TrashBin } from "flowbite-react-icons/outline";
import Card from "../components/Card";
import { useEffect } from "react";

export default function DetailsDeck() {
    const { id } = useParams();

    const { data, isLoading } = useFetchDeckById(id);


    return (
        <>
            <main className="flex justify-center items-center">
                {isLoading ? (
                    <div className="text-center text-oxford-blue text-xl">
                        <p>Carregando...</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:w-7/10 gap-7 bg-white-smoke shadow-md p-10 rounded-md w-9/10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-oxford-blue text-4xl">{data.title}</h2>
                            <div className="flex gap-2">
                                <button className="rounded-xl bg-oxford-blue text-white-smoke px-3 py-2 hover:bg-oxford-blue/90"><Edit /></button>
                                <button className="rounded-xl bg-crimson text-white-smoke px-3 py-2 hover:bg-crimson/90"><TrashBin /></button>
                            </div>
                        </div>
                        <p className="text-oxford-blue text-2xl">{data.description}</p>
                        <div className="flex flex-row justify-end">
                            <button className="justify-self-end bg-rich-black text-white px-4 py-2 rounded-md hover:bg-dark-blue transition-colors ml-4">
                                Estudar Deck
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 border-t-2 border-oxford-blue pt-4">
                            <div className="flex flex-wrap gap-2">
                                {data.categories.map((category) => (
                                    <span key={category.id} className="bg-oxford-blue text-white px-3 py-1 rounded-full">
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-row gap-4 pt-4 flex-wrap justify-start">
                                {data.cards.length > 0 ? (
                                    data.cards.map((card) => (
                                        <Card key={card.id} question={card.question} answer={card.answer} />
                                    ))
                                ) : (
                                    <p className="text-rich-black text-lg">Nenhum card encontrado para este deck.</p>
                                )}
                                <div className="flex cursor-pointer items-center shadow-md border-rich-black border-2 justify-center bg-platium w-[262px] h-[309px] rounded-md">
                                    <CirclePlus className="w-12 h-12 text-rich-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}