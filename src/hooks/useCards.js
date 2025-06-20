import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCardById } from "../services/cards";

export function useCreateCard(deckId){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({deckId, card}) => createCardById(deckId, card),
        onSuccess: async() => {
            await queryClient.invalidateQueries({
                queryKey: ['deck-cards', deckId],
            })
        }
    })
}