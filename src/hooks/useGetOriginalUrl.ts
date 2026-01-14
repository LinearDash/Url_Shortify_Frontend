import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchOriginalUrl = async (shortCode: string) => {
    try {
        const data = await api.getUrlDetails(shortCode);
        console.log(data.data.originalUrl);
        
        return data.data.originalUrl;
    } catch (error) {
        console.error('Failed to get original URL:', error);
        throw error;
    }
}

export const useGetOriginalUrl = (shortCode: string) => {
    return useQuery({
        queryKey: ['originalUrl', shortCode],
        queryFn: () => fetchOriginalUrl(shortCode),
        enabled: !!shortCode,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        staleTime: Infinity,
    });
}