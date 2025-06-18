import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createDeck, getDeckById, getDecks } from "../services/decks"

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

export function useFetchDeckById(id){
    return useQuery({
        queryKey: ['deck', id],
        queryFn: () => getDeckById(id),
        enabled: !!id, 
    })
}