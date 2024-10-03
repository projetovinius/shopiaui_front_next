import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { signupSallerApi } from "@/api/post/signupSallerApi";
import { SallerSignupProps } from "@/types/saller_signup_model";

const queryClient = new QueryClient()

function useSignupSallerMutation() {
    const { token } = useContext(AuthContext);

    return useMutation({
        mutationFn: (data: SallerSignupProps) => {
            return signupSallerApi(data, token);
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['saller']});
            console.log('deu certo');
            return response;
        },
        onError: (error) => {
            console.error(error);
        }
    });
}

export { useSignupSallerMutation };
