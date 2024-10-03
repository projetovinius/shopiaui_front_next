import { CategoriesProps } from "@/types/categories_model"
import { api } from "../api"

async function createCategoryApi(data: CategoriesProps, token: string|null) {
    console.log("api: ", data)
    console.log("token api", token)
    try {
        const response = await api.post(
            'categories',
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    } catch (error) {
        console.log(error)
        throw error
    }
};

export {
    createCategoryApi
}