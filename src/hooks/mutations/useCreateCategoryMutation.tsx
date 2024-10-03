import { createCategoryApi } from "@/api/post/createCategoryApi";
import { CategoriesProps } from "@/types/categories_model";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function useCreateCategoryMutation(token: string|null) {
    return useMutation({
        mutationFn: (data: CategoriesProps) => {
            console.log(data, token)
            return createCategoryApi(data, token)
        },
        onSuccess: (response) => {
            console.log(response)
            queryClient.invalidateQueries({queryKey: ['category']})
            return response
        },
        onError: (error) => {
            console.error(error)
        }
    })
};
