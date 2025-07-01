import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig"

export const getCardsByDeckId = async(deckId) =>{
    try{
        const condition = query(collection(db, "cards"), where("deckId", "==", deckId));
        const querySnapshot = await getDocs(condition);

        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    }catch(error) {
        console.error("Erro ao buscar card do deck:", error);
        throw error;
    }
}


export const createCardById = async(deckId, card) => {
    try{
        await addDoc(collection(db, "cards"), {
            deckId: deckId,
            question: card.question,
            answer: card.answer,
        })
    }catch(error) {
        console.error("Erro ao criar card:", error);
    }
}