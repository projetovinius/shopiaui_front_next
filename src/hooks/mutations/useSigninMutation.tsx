import { signinApi } from "@/api/post/signinApi";
import { SignInProps } from "@/types/auth_signin_model";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient()

function useSigninMutation() {
    return useMutation({
        mutationFn: (data: SignInProps) => {
            return signinApi(data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['user']})
            return response
        },
        onError: (error) => {
            console.error(error)
        }
    })
};

export {
    useSigninMutation
}