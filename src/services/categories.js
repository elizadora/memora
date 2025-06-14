import { db, auth } from "./firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";


// aux function
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

export const fetchCategories = async () => {
    try {
        const condition = query(collection(db, "categories"), where("userId", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(condition);

        const data = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
                const totalDecks = await fetchTotalDecksByCategory(doc.id);
                return { id: doc.id, totalDecks, ...doc.data() };
            })

        );

        return data;
    } catch (error) {
        console.error(error);
    }
};


export const addCategory = async (categoryName) => {
    try {
        await addDoc(collection(db, "categories"), {
            name: categoryName,
            userId: auth.currentUser.uid,
        });

    } catch (error) {
        console.error("Erro ao criar categoria:", error);
        return;
    }
}