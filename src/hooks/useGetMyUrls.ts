import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchUrls = async (token: string) => {
    try {
        const data = await api.getMyUrls(token);
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const useGetMyUrls = (token: string) => {
    return useQuery({
        queryKey: ['myUrls'],
        queryFn: () => fetchUrls(token),
        enabled: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        staleTime: Infinity,
    })
}