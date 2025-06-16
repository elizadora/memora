import CategoryCard from "../components/CategoryCard";
import { useFetchCategories } from "../hooks/useCategories"; 

export default function Categories() {
    const { data, isLoading } = useFetchCategories();

    return (
        <>
            <main className="flex justify-center flex-wrap gap-30">
                {isLoading ? (
                    <p className="text-oxford-blue text-xl">Carregando...</p>
                ) : (
                    <select className="bg-white-smoke text-oxford-blue lg:w-xl w-7/10 float-end py-2 px-3 mt-5 rounded-3xl">
                        {data.length > 0 ? (
                            data.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>Nenhuma categoria cadastrada</option>
                        )}
                    </select>
                )}
                <div className="flex flex-wrap gap-10 items-center justify-evenly flex-col lg:flex-row mb-10 w-full">
                    {isLoading ? (
                        <p className="text-oxford-blue text-xl">Carregando categorias...</p>
                    ) : data.length > 0 ? (
                        data.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))
                    ) : (
                        <p className="text-oxford-blue text-xl">Nenhuma categoria cadastrada</p>
                    )}
                </div>
            </main>
        </>
    )
}