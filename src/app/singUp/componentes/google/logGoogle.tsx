"use client"
import { signIn } from "next-auth/react"

export default function GoogleButtons(){
    return(
       <button onClick={() => signIn("google",{ callbackUrl: "/dashboard"})}>
        Login com o google
       </button>
    )
}