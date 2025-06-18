import { createCategory } from "./categories";
import { db, auth } from "./firebaseConfig";
import { collection, getDocs, query, where, addDoc, deleteDoc, doc, updateDoc, getDoc, limit as fbLimit, runTransaction } from "firebase/firestore";


// fetch decks firestore
// first and all by limit param
export const getDecks = async (lim) => {
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


export const createDeck = async({deck, categories, cards}) => {
    console.log("Creating deck:", deck);
    console.log("Selected categories:", categories);
    console.log("Cards:", cards);
    try{
        await runTransaction(db, async(transaction) => {
            const deckRef = doc(collection(db, "decks"));
            const deckData = {
                title: deck.title,
                description: deck.description,
                userId: auth.currentUser.uid
            }

            transaction.set(deckRef, deckData);

            const categoriesRef = [];

            // categories
            for(const category of categories){
                if(category.label === category.value){
                    // new category
                    const categoryRef = doc(collection(db, "categories"));
                    const categoryData = {
                        name: category.label,
                        userId: auth.currentUser.uid
                    }

                    transaction.set(categoryRef, categoryData);
                    categoriesRef.push(categoryRef.id);
                
                }else{
                   categoriesRef.push(category.value);
                }
            }
            
            // decks_categories
            for (const categoryId of categoriesRef) {
                const deckCategoryRef = doc(collection(db, "decks_categories"));
                const deckCategoryData = {
                    deckId: deckRef.id,
                    categoryId: categoryId
                }

                transaction.set(deckCategoryRef, deckCategoryData);
            }

            // cards
            for(const card of cards){
                const cardRef = doc(collection(db, "cards"));
                const cardData = {
                    question: card.question,
                    answer: card.answer,
                    deckId: deckRef.id
                }

                transaction.set(cardRef, cardData);
            }

        })

    }catch(error){
        console.log(error)
    }
}


export const getDeckById = async(id) => {
    try{
        // deck
        const deckRef = doc(db, "decks", id);
        const deckSnap = await getDoc(deckRef);
        
        if(!deckSnap.exists()){
            console.log("deck nao existe");
        }

        // categories
        const categoriesCondition = query(collection(db, "decks_categories"), where("deckId", "==", id));

        const categoriesSnap = await getDocs(categoriesCondition);

        const categories = [];

        if(!categoriesSnap.empty){
            for(const category of categoriesSnap.docs){
                const categoryId = category.data().categoryId;
                const categoryRef = doc(db, "categories", categoryId);
                const categorySnap = await getDoc(categoryRef);

                if(categorySnap.exists()){
                    categories.push({ id: categorySnap.id, ...categorySnap.data() });
                }
            }
        }

        // cards
        const cardsCondition = query(collection(db, "cards"), where("deckId", "==", id));
        const cardsSnap = await getDocs(cardsCondition);
        const cards = cardsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return {
            id: deckSnap.id,
            ...deckSnap.data(),
            categories,
            cards
        };

    }catch(error){
        console.error(error);
        return null;
    }
}