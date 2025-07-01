import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createDeck, deleteDeck, getDeckById, getDecks, updateDeck } from "../services/decks"
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
        }
    })
}

export function useDeleteDeck() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteDeck,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['decks-list'],
            });
        }
    })
}

export function useUpdateDeck(id){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateDeck,
        onSuccess: async () =>{
            await queryClient.invalidateQueries({
                queryKey: ['deck', id]
            })
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