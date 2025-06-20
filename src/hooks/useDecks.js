import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createDeck, getDeckById, getDecks } from "../services/decks"
import { getCategoriesDeck } from "../services/decksCategories";
import { getCardsByDeckId } from "../services/cards";

export function useFetchDecks() {
    return useQuery({
        queryKey: ['decks-list'],
        queryFn: () => getDecks(),
    })
}

export function useFetchDecksFirst() {
    return useQuery({
        queryKey: ['decks-list-limitted'],
        queryFn: () => getDecks(4),
    })
}


export function useCreateDeck() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createDeck,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['decks-list'],
            });

            console.log("Certo");
        }
    })
}

export function useDeckData(id){
    const deckQuery = useQuery({
        queryKey: ['deck', id],
        queryFn: () => getDeckById(id),
    });

    const categoriesQuery = useQuery({
        queryKey: ['deck-categories', id],
        queryFn: () => getCategoriesDeck(id),
    });

    const cardsQuery = useQuery({
        queryKey: ['deck-cards', id],
        queryFn: () => getCardsByDeckId(id),
    });

    return {
        deck: deckQuery.data,
        categories: categoriesQuery.data,
        cards: cardsQuery.data,
        isLoading: deckQuery.isLoading || categoriesQuery.isLoading || cardsQuery.isLoading,
        error: deckQuery.error || categoriesQuery.error || cardsQuery.error,
    }
}