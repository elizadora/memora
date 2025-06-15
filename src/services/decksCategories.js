import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig"

export const getCategoriesDeck = async (deckID) => {
    try{
        const condition = query(collection(db, "decks_categories"), where("deckId", "==", deckID));
        const querySnapshot = await getDocs(condition);

        console.log("deckID:", deckID);

        const categories = querySnapshot.docs.map(async (document) => {
            const categoryId = document.data().categoryId;
            const categoryRef = doc(collection(db, "categories"), categoryId);
            
            const categoryDoc = await getDoc(categoryRef);
            return { id: document.id, ...categoryDoc.data()};
        }
        );

        const categoriesData = await Promise.all(categories);
        console.log("Categories fetched:", categoriesData);
        return categoriesData;
    
    }catch (error) {
        console.error("Erro ao buscar categorias do deck:", error);
        throw error;
    }
}