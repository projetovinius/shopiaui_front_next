import { CreatedProductForm } from "@/app/configVendedor/componentes/form_produto/formProduct";
import useCreateProductMutation from "./mutations/useCreateProductMutation";

export default function useCreateProductForm(token: string | null) {
  const createProductMutation = useCreateProductMutation(token);

  const handleOnSubmit = (data: CreatedProductForm) => {
    return createProductMutation.mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        console.log("deu certo");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return {
    handleOnSubmit,
  };
}
