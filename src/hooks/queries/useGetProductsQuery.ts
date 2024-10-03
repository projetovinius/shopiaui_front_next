import { getProductsApi } from "@/api/get/getProductsApi";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductsQuery(token: string| null) {
    const {data, error, isLoading} = useQuery({
        queryKey: ['products', token],
        queryFn: ({queryKey}) => {
            const tokenFromQueryKey = queryKey[1]
            console.log("token do query key: ",tokenFromQueryKey)
            return getProductsApi(tokenFromQueryKey)
        }
    })

    return{
        data,
        error,
        isLoading
    }
};
