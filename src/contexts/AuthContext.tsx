"use client"
import { SignInProps, UserProps } from "@/types/auth_signin_model";
import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useSigninMutation } from "@/hooks/mutations/useSigninMutation";
import { useRouter } from "next/navigation";

interface AuthContextData {
  token: string | null;
  login: (data: SignInProps) => void;
  logout: () => void;
  user: UserProps | null
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProps|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const signinMutation = useSigninMutation();
    const router = useRouter()
    useEffect(()=> {
        const loadTokenAuthetication = async () => {
            const store_token = Cookies.get('@authtoken')
            if(store_token) {
                setToken(store_token)
            }
        }
        loadTokenAuthetication()
    }, [])

    async function login(data: SignInProps) {
        setIsLoading(true);
        try {
        signinMutation.mutate(data, {
            onSuccess: (response) => {
                    const accessToken = response?.token; 
                    const user = response?.user; 
                    console.log('dados do usuário loggado: ', user)
                    console.log('Login bem-sucedido:', response); 
                    Cookies.set("@authtoken", accessToken);
                    setToken(accessToken);
                    setUser(user)
                    router.push('/signup_saller')
            },
            onError: (error) => {
                console.log(error)
            }
        });
        } catch (error) {
        console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    function logout () {
        Cookies.remove('@authtoken')
    }

    const isAuthenticated = !!token

    return(
        <AuthContext.Provider value={{token, user, login, logout, isLoading, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider,
    AuthContext, 
    
}
    