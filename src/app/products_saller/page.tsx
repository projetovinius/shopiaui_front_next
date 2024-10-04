import { AuthContext } from "@/contexts/AuthContext"
import useGetProductsQuery from "@/hooks/queries/useGetProductsQuery"
import { useContext } from "react"

export default function ProductSaller() {
    const {token} = useContext(AuthContext)
    const {data=[], isLoading} = useGetProductsQuery(token)

    if (isLoading) {
        return <p>carregando...</p>
    }

    return (
        <div className="w-full h-full">
            <div className="h-36 gap-6 w100%] flex flex-row items-center justify-between border  rounded-md px-8">
                <div className="h-[80%] w-32 bg-slate-300"></div>
                <div className="w-fit flex gap-20 flex-row items-center">
                    <p>{data[0].name}</p>
                    <p>{data[0].category_id}</p>
                    <p>{data[0].price}</p>
                </div>
            </div>
        </div>
    )
};
