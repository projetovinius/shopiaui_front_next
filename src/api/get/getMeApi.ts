import { api } from "../api"

export async function getMeApi(token: string|null) {
    try {
        const response = await api.get(
            '/me',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    } catch (error) {
        throw error
    }
};
