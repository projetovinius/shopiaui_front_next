import { getMeApi } from "@/api/get/getMeApi"
import { useQuery } from "@tanstack/react-query"

export default function useGetMeQuery(token: string|null) {
    const {data, error, isLoading} = useQuery({
        queryKey: ['me', token],
        queryFn: ({queryKey}) => {
            const tokenFromQueryKey = queryKey[1]
            console.log("token do query key: ",tokenFromQueryKey)
            return getMeApi(tokenFromQueryKey)
        }
    })

    return{
        data,
        error,
        isLoading
    }
};
