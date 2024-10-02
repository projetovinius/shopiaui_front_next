interface SignInProps {
    email: string
    password: string
}

interface UserProps {
    id?: number,
    username?: string,
    email?: string,
    phone_number?: string,
    isLoja?: boolean
}

export type {
    SignInProps,
    UserProps
}