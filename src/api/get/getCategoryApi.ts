import { api } from "../api"

async function getCategoryApi(token: string | null) {
    try {
        const response = await api.get(
            'categories',
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
};

export {
    getCategoryApi
}