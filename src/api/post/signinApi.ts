'use client'
import { SignInProps } from "@/types/auth_signin_model"
import { api } from "../api"

async function signinApi(data: SignInProps) {
    try {
        const response = await api.post(
            '/auth/login',
            data
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export {
    signinApi
}