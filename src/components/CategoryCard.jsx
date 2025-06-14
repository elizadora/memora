import { Edit, TrashBin } from "flowbite-react-icons/outline";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import CategoryModal from "./CategoryModal";
import { DialogContext } from "../context/DialogContext";
import { useDeleteCategory } from "../hooks/useCategories";

export default function CategoryCard({ category }) {
    const { openModal } = useContext(ModalContext);
    const { openDialog } = useContext(DialogContext);

    const { mutate: remove } = useDeleteCategory();

    const handleEditCategory = (event) => {
        event.preventDefault();
        openModal("Editar categoria", <CategoryModal category={category} />)
    }

    const handleDeleteCategory = (event) => {
        event.preventDefault();
        openDialog(
            "Atenção",
            "Tem certeza que deseja excluir essa categoria?",
            () => {
                remove(category.id);
            }
        )


    }

    return (
        <div className="bg-white-smoke lg:w-1/3 w-8/10 p-4 rounded-xl shadow-md flex justify-between font-roboto-slab text-rich-black text-[15px]">
            <p className="">{category.name}</p>
            <div className="flex gap-4">
                <p>{category.totalDecks}</p>
                <button onClick={handleEditCategory} className="cursor-pointer hover:text-black"><Edit /></button>
                <button onClick={handleDeleteCategory} className="cursor-pointer hover:text-black"><TrashBin /></button>
            </div>
        </div>
    )
}