import { db, auth } from "./firebaseConfig";
import { collection, getDocs, query, where, addDoc, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";


// aux function(count)
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

// fetch all categories firestore
export const getAllCategories = async () => {
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

// fetch category by id firestore
export const getCategoryById = async (id) => {
    try {
        const docRef = doc(db, "categories", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.error("Categoria não encontrada");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar categoria:", error);
        return null;
    }
};


// add new category firestore
export const createCategory = async (categoryName) => {
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

// update category firestore
export const updateCategory = async (category) => {
    try{
        console.log("category", category);
        await updateDoc(doc(db, "categories", category.id), {
            name: category.name
        });

    }catch(error){
        console.error("Erro ao atualizar categoria:", error);
        return;
    }
}

// remove category firestore
export const deleteCategory = async (id) => {
    try {
        await deleteDoc(doc(db, "categories", id));
    
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
        return;
    }
}