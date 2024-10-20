import { CreatedProductForm } from "@/app/configVendedor/componentes/form_produto/formProduct";
import { api } from "../api";

export async function createProductApi(
  data: CreatedProductForm,
  token: string | null
) {
  try {
    await api.post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
}
