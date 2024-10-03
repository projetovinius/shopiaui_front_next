import { createProductApi } from "@/api/post/createProductApi";
import { CreatedProductForm } from "@/app/configVendedor/componentes/formProduto/post-produto";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function useCreateProductMutation(token: string|null) {
    return  useMutation(
        {
            mutationFn: (data: CreatedProductForm) => {
                console.log(data)
                return createProductApi(data, token)
            },
            onSuccess: (response) => {
                queryClient.invalidateQueries({queryKey: ['product']})
                return response
            },
            onError: (error) => {
                console.log(error)
            }
        }
    )
};
