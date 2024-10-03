'use client'
import { useForm } from 'react-hook-form';
import { SignInProps } from '@/types/auth_signin_model';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export default function useSigninForm() {
    const {
        control,
        register,
        handleSubmit,
    } = useForm<SignInProps>();
    
    const { login, isLoading, token } = useContext(AuthContext);

    const handleOnSubmit = (data: SignInProps) => {
        console.log(data)
        try {
            console.log(data);

            login(data);
            console.log(token)
        } catch (error) {
            console.error(error);
        }
    };

    return {
        control,
        register,
        handleOnSubmit,
        handleSubmit,
        isLoading,
    };
}
