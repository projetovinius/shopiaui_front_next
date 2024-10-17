'use client'
import { AuthContext } from "@/contexts/AuthContext"
import useGetProductsQuery from "@/hooks/queries/useGetProductsQuery"
import { useContext, useEffect, useState } from "react"

export default function ProductSaller() {
    const { token } = useContext(AuthContext);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { data = [], isLoading } = useGetProductsQuery(token);

    if (!isClient) {
        return <p>Carregando...</p>;
    }

    if (isLoading) {
        return <p>carregando...</p>;
    }

    

    return (
        <div className="w-full h-full">
            <div className="h-36 gap-6 w-[100%] flex flex-row items-center justify-between border rounded-md px-8">
                <div className="h-[80%] w-32 bg-slate-300"></div>
                <div className="w-fit flex gap-20 flex-row items-center">
                    <p>{data[0]?.name || "Produto sem nome"}</p>
                    <p>{data[0]?.category_id || "Sem categoria"}</p>
                    <p>{data[0]?.price || "Sem preço"}</p>
                </div>
            </div>
        </div>
    );
};
