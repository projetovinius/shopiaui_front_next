'use client'
import { SignInProps } from "@/types/auth_signin_model"
import { api } from "../api"

async function signinApi(data: SignInProps) {
    try {
        const response = await api.post(
            '/auth/login',
            data
        )
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export {
    signinApi
}