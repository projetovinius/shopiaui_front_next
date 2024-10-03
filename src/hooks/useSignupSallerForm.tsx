'use client'
import { AuthContext } from "@/contexts/AuthContext";
import { SallerSignupProps } from "@/types/saller_signup_model";
import React,{ useContext, useState } from "react";
// import { useForm } from "react-hook-form";
import { useSignupSallerMutation } from "./mutations/useSignupSallerMutation";
import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

export default function useSignupSallerForm() {
    const router = useRouter()
    // const [isLoading, setIsLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const sallerSignupMutation = useSignupSallerMutation()

    const handleOnSubmit = (data: SallerSignupProps) => {
        // setIsLoading(true)
        console.log(data)
        return sallerSignupMutation.mutate(
        {
            ...data,
            user_id: user?.id
        },    
        {
            onSuccess: (response) => {
                console.log(response)
                // setIsLoading(false)
                router.push('/teste')
            },
            onError: (error) => {
                console.error(error)
            }
        })
    };

    return {
        handleOnSubmit,
    };
};
    

