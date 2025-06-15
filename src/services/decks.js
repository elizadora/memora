import { db, auth } from "./firebaseConfig";
import { collection, getDocs, query, where, addDoc, deleteDoc, doc, updateDoc, getDoc, limit as fbLimit } from "firebase/firestore";


// fetch decks firestore
// first and all by limit param
export const getDecks = async ({ lim = 4 }) => {
    try {
        let condition = query(collection(db, "decks"), where("userId", "==", auth.currentUser.uid));

        if (lim) {
            condition = query(condition, fbLimit(lim));
        }

        const querySnapshot = await getDocs(condition);

        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error);
    }
}