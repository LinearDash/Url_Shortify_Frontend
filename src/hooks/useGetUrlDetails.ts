import  { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchUrlDetails = async (shortCode: string) => {
    try {
        const data = await api.getUrlDetails(shortCode);
        return data;
    } catch (error) {
        console.error('Failed to fetch URL details:', error);
        throw error;
    }
}

export const useGetUrlDetails = (shortCode: string) => {
    return useQuery({
        queryKey: ['urlDetails', shortCode],
        queryFn: () => fetchUrlDetails(shortCode),
        enabled: !!shortCode,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        staleTime: Infinity,
    });
}