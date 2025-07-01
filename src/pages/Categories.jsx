import { Search } from "flowbite-react-icons/outline";
import CategoryCard from "../components/CategoryCard";
import { useFetchCategories } from "../hooks/useCategories";

export default function Categories() {
    const { data, isLoading } = useFetchCategories();

    return (
        <>
            <main className="flex justify-center flex-wrap gap-30">
                <div className="relative">
                    <input type="text" className="pl-10 py-2 w-sm border-2 border-gray-400 lg:w-2xl rounded-3xl bg-white-smoke" placeholder="Ex: Literatura" />
                    <div className="absolute inset-y-0 right-0 pr-3  flex items-center pointer-events-none">
                        <Search className="text-oxford-blue" />
                    </div>
                </div>
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