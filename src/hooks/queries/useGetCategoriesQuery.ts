import { getCategoryApi } from "@/api/get/getCategoryApi"
import { useQuery } from "@tanstack/react-query"

export default function useGetCategoriesQuery(token: string|null) {
    const {data, error, isLoading} = useQuery({
        queryKey: ['categories', token],
        queryFn: ({queryKey}) => {
            const tokenFromQueryKey = queryKey[1]
            console.log("token do query key: ",tokenFromQueryKey)
            return getCategoryApi(tokenFromQueryKey)
        }
    })

    return{
        data,
        error,
        isLoading
    }
};
