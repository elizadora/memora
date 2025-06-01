export default function DeckCard({title, category, description}) {
    return (
        <div className="bg-white-smoke lg:w-1/3 w-9/10 p-8 rounded-xl shadow-md">
            <div className="flex justify-between">
                <p className="font-roboto-slab text-rich-black text-2xl">{title}</p>
            <button disabled className="rounded-xl bg-oxford-blue text-white-smoke px-3 py-2">{category}</button>
            </div>
            <p className="text-rich-black font-open-sans text-[18px] mt-5">{description}</p>
        </div>
    )
}