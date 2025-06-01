export default function CardFeatures({icon, title, text}){
    return (
        <div className="w-2xs md:w-1/4 h-2xs p-8 border-2 border-gray-300 rounded-md flex shadow-md flex-col items-center text-center text-rich-black">
            {icon}
            <h4 className="text-2xl font-roboto-slab font-medium pt-6">{title}</h4>
            <p className="text-xl font-open-sans font-normal pt-6">{text}</p>                                                   
        </div>
    )
}                                                                                               