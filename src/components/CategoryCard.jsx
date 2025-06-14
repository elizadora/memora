import { Edit, TrashBin } from "flowbite-react-icons/outline";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import NewCategoryModal from "./NewCategoryModal";

export default function CategoryCard({ category }) {

    const { openModal } = useContext(ModalContext);

    const handleEditCategory = (event) =>{
        event.preventDefault();
        openModal("Editar categoria", <NewCategoryModal id={category.id} />, () => {
            console.log("Categoria editada!");
            }
        )
        
    }

    return (
        <div className="bg-white-smoke lg:w-1/3 w-8/10 p-4 rounded-xl shadow-md flex justify-between font-roboto-slab text-rich-black text-[15px]">
            <p className="">{category.name}</p>
            <div className="flex gap-4">
                <p>{category.totalDecks}</p>
                <button onClick={handleEditCategory} className="cursor-pointer hover:text-black"><Edit/></button>
                <button className="cursor-pointer hover:text-black"><TrashBin/></button>
            </div>
        </div>
    )
}