import { CategoriesProps } from "@/types/categories_model";
import useCreateCategoryMutation from "./mutations/useCreateCategoryMutation";


export default function useCreateCategoryForm(token: string|null) {
    const createCategoryMutation = useCreateCategoryMutation(token)
    const handleOnSubmit = (data: CategoriesProps) => {
        return createCategoryMutation.mutate(
            {
                ...data,
                description: "sem descrição ..."
            },
            {
                onSuccess: (response) => {
                    console.log('deu certo', response)
                },
                onError: (error) => {
                    console.error(error)
                }
            }
        )
    }
    return {
        handleOnSubmit
    }
}
