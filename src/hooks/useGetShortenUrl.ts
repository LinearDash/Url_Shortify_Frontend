import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

const fetchShortenedUrl = async (url: string) => {
    try {        
        const data = await api.shortenUrl(url);
        return data.data.shortCode;
    } catch (error) {
        console.error('Failed to shorten URL:', error);        
        throw error;
    }

}

export const useGetShortenUrl = () => {
    
    return useMutation({
        mutationFn: (longUrl: string) => fetchShortenedUrl(longUrl),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['urls'] });
        }
    })

}