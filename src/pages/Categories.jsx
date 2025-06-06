import CategoryCard from "../components/CategoryCard";

export default function Categories() {
    return (
        <>
            <main className="flex justify-center flex-wrap gap-30">
                <select className="bg-white-smoke text-oxford-blue lg:w-xl w-7/10 float-end py-2 px-3 mt-5 rounded-3xl">
                    <option>Categoria 1</option>
                </select>
                <div className="flex flex-wrap gap-10 items-center justify-evenly flex-col lg:flex-row mb-10 w-full">
                    <CategoryCard category="Categoria 1" totalDecks={1} />
                    <CategoryCard category="Categoria 1" totalDecks={2} />
                    <CategoryCard category="Categoria 1" totalDecks={3} />
                    <CategoryCard category="Categoria 1" totalDecks={4} />
                    <CategoryCard category="Categoria 1" totalDecks={5} />
                    <CategoryCard category="Categoria 1" totalDecks={6} />
                    <CategoryCard category="Categoria 1" totalDecks={7} />
                </div>
            </main>
        </>
    )
}