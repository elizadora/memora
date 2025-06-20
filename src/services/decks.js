import { createCategory } from "./categories";
import { getCategoriesDeck } from "./decksCategories";
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


export const createDeck = async ({ deck, categories, cards }) => {
    try {
        await runTransaction(db, async (transaction) => {
            const deckRef = doc(collection(db, "decks"));
            const deckData = {
                title: deck.title,
                description: deck.description,
                userId: auth.currentUser.uid
            }

            transaction.set(deckRef, deckData);

            const categoriesRef = [];

            // categories
            for (const category of categories) {
                if (category.label === category.value) {
                    // new category
                    const categoryRef = doc(collection(db, "categories"));
                    const categoryData = {
                        name: category.label,
                        userId: auth.currentUser.uid
                    }

                    transaction.set(categoryRef, categoryData);
                    categoriesRef.push(categoryRef.id);

                } else {
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
            for (const card of cards) {
                const cardRef = doc(collection(db, "cards"));
                const cardData = {
                    question: card.question,
                    answer: card.answer,
                    deckId: deckRef.id
                }

                transaction.set(cardRef, cardData);
            }

        })

    } catch (error) {
        console.error(error)
    }
}

export const deleteDeck = async (deckId) => {
    try {
        await runTransaction(db, async (transaction) => {
            // delete deck
            const deckRef = doc(db, "decks", deckId);
            transaction.delete(deckRef);
            
            // delete categories
            const categoriesCondition = query(collection(db, "decks_categories"), where("deckId", "==", deckId));
            const categoriesSnapshot = await getDocs(categoriesCondition);
            for (const category of categoriesSnapshot.docs) {
                transaction.delete(doc(db, "decks_categories", category.id));
            }

            // delete cards
            const cardsCondition = query(collection(db, "cards"), where("deckId", "==", deckId));
            const cardsSnapshot = await getDocs(cardsCondition);
            for (const card of cardsSnapshot.docs) {
                transaction.delete(doc(db, "cards", card.id));
            }
        });


    } catch (error) {
        console.error(error);
    }
}


export const getDeckById = async (id) => {
    try {
        // get deck
        const docRef = doc(db, "decks", id);

        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            console.error("Deck not found");
            return null;
        }

        return { id: docSnap.id, ...docSnap.data() };

    } catch (error) {
        console.error(error);
        return null;
    }
}