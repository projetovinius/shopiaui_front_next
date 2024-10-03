import { api } from "../api"

async function getProductsApi(token: string|null) {
    try {
        const response = await api.get(
            '/products',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    getProductsApi
}