import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory} from "../services/categories";


export function useFetchCategories() {
    return useQuery({
        queryKey: ['categories-list'],
        queryFn: getAllCategories,
    })
}

export function useFetchCategory(id) {
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => getCategoryById(id),
        enabled: !!id,
    })
}




export function useCreateCategory(callbackSuccess) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createCategory,
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
        mutationFn: updateCategory,
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
        mutationFn: deleteCategory,
        onSuccess: async() => {
            await queryClient.invalidateQueries({
                queryKey: ['categories-list'],
            });
        }
    })
}


