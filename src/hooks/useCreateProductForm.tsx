import { CreatedProductForm } from "@/app/configVendedor/componentes/formProduto/post-produto";
import useCreateProductMutation from "./mutations/useCreateProductMutation";

export default function useCreateProductForm(token: string|null) {
    const createProductMutation = useCreateProductMutation(token)

    const handleOnSubmit = (data: CreatedProductForm) => {
        return createProductMutation.mutate(
            data,
            {
                onSuccess: (response) => {
                    console.log(response)
                    console.log('deu certo')
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        )
    }
    return {
        handleOnSubmit
    }
};
