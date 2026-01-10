import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchShortenedUrl = async (url: string) => {
    try {
        console.log(url);
        
        const data = await api.shortenUrl(url);
        return data.data.shortCode;
    } catch (error) {
        console.error('Failed to shorten URL:', error);
        throw error;
    }

}

export const useGetShortenUrl = (longUrl: string) => {
    return useQuery({
        queryKey: ['shortenedUrl', longUrl],
        queryFn: () => fetchShortenedUrl(longUrl),
        enabled: !!longUrl,
    });
}