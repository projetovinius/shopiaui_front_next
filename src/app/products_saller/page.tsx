'use client'
import { AuthContext } from "@/contexts/AuthContext"
import useGetProductsQuery from "@/hooks/queries/useGetProductsQuery"
import { useContext, useEffect, useState } from "react"
import SearchAutocomplete from '../../components/SearchAutoComplete/SearchAutocomplete';
import Filter from "@/components/Filter/Filter";

export default function ProductSaller() {
    const { token } = useContext(AuthContext);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Adiciona overflow-hidden ao body para remover o scroll principal
        document.body.style.overflow = 'hidden';
        
        return () => {
            // Remove a restrição de overflow quando o componente for desmontado
            document.body.style.overflow = '';
        };
    }, []);

    const { data = [], isLoading } = useGetProductsQuery(token);

    if (!isClient) {
        return <p>Carregando...</p>;
    }

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="container mx-auto px-4 h-screen flex flex-col overflow-hidden">
            <p className="text-3xl text-blue-dark font-medium">Produtos: </p>
            
            {/* Barra de busca e filtro */}
            <div className="w-full my-6 flex flex-row items-center justify-between gap-10">
                <SearchAutocomplete/>
                <Filter/>
            </div>

            {/* Header da tabela */}
            <div className="grid grid-cols-5 gap-4 bg-slate-200 p-4 rounded-t-md font-semibold text-blue-dark">
                <div>Imagem</div>
                <div>Nome</div>
                <div>Quantidade</div>
                <div>Preço</div>
                <div>Ações</div>
            </div>

            {/* Cards de produtos com scroll */}
            <div className="flex-1 overflow-y-auto">
                {data.map((product: any) => (
                    <div key={product.id} className="grid grid-cols-5 gap-4 border-b border-gray-200 p-4 items-center">
                        <div className="w-20 h-20">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>{product.name}</div>
                        <div>{product.quantity}</div>
                        <div>${product.price}</div>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

