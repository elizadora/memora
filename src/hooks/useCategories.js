import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { add, remove, getAll, update } from "../services/categories"



export function useFetchAll() {
    return useQuery({
        queryKey: ['categories-list'],
        queryFn: getAll,
    })
}

export function useFetchCategoryById(id) {
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => getById(id),
        enabled: !!id,
    })
}




export function usePostCategory(callbackSuccess) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: add,
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

export function useUpdateCategory(callbackSuccess){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: update,
        onSuccess: async() => {
            await queryClient.invalidateQueries({
                queryKey: ['categories-list'],
            });

            if(callbackSuccess){
                callbackSuccess();
            }
        }
    })
}



export function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: remove,
        onSuccess: async() => {
            await queryClient.invalidateQueries({
                queryKey: ['categories-list'],
            });
        }
    })
}


