import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addCategory, fetchCategories } from "../services/categories"



export function fetchAll() {
    return useQuery({
        queryKey: ['categories-list'],
        queryFn: fetchCategories,
    })
}

export function postCategory(callbackSuccess) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addCategory,
        onSuccess: async() => {
           await queryClient.invalidateQueries({
                queryKey: ['categories-list'],
            });

            if(callbackSuccess){
                callbackSuccess();
            }
        },
    })
}