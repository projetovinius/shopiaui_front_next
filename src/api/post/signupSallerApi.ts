import { SallerSignupProps } from "@/types/saller_signup_model";
import { api } from "../api";

export async function signupSallerApi(data: SallerSignupProps, token: string|null) {
    try {
        const response = await api.post(
            '/stores',
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
