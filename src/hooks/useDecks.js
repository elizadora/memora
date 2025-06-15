import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getDecks } from "../services/decks"

export function useFetchAll(){
    return useQuery({
        queryKey: ['decks-list'],
        queryFn: getDecks,
    })
}

export function useFetchFirst({lim = 4} = {}){
    return useQuery({
        queryKey: ['decks-list-limitted'],
        queryFn: () => getDecks({lim}),
    })
}