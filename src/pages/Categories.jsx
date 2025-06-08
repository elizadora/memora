import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";

export default function Categories() {
    // load categories user
    const [categories, setCategories] = useState([]);

    const fetchTotalDecksByCategory = async (categoryId) => {
        try {
            const condition = query(collection(db, "decks_categories"), where("categoryId", "==", categoryId));
            const querySnapshot = await getDocs(condition);
            return querySnapshot.size;
        } catch (error) {
            console.error(error);
            return 0;
        }
    };

    const fetchCategories = async () => {
        try {
            const condition = query(collection(db, "categories"), where("userId", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(condition);

            const data = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const totalDecks = await fetchTotalDecksByCategory(doc.id);
                    return { id: doc.id, totalDecks, ...doc.data() };
                })
            );

            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <>
            <main className="flex justify-center flex-wrap gap-30">
                <select className="bg-white-smoke text-oxford-blue lg:w-xl w-7/10 float-end py-2 px-3 mt-5 rounded-3xl">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))};
                </select>
                <div className="flex flex-wrap gap-10 items-center justify-evenly flex-col lg:flex-row mb-10 w-full">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <CategoryCard key={category.id} category={category.name} totalDecks={category.totalDecks} />
                        ))
                    ) : (
                        <p className="text-oxford-blue text-xl">Nenhuma categorira cadastrada</p>
                    )}
                </div>
            </main>
        </>
    )
}