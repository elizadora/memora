export default function CategoryCard({category, totalDecks}){
    return (
        <div className="bg-white-smoke lg:w-1/3 w-8/10 p-4 rounded-xl shadow-md flex justify-between font-roboto-slab text-rich-black text-[15px]">
            <p className="">{category}</p>
            <p>{totalDecks}</p>
        </div>
    )
}