import { useQuery } from "@tanstack/react-query";
import { getCategoriesDeck } from "../services/decksCategories";

export function useDecksCategories(id) {
    return useQuery({
        queryKey: ['decks-categories', id],
        queryFn: () => getCategoriesDeck(id),
    })
}
