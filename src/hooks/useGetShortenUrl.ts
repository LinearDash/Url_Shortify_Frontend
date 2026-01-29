import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

const fetchShortenedUrl = async (url: string, token: string) => {
    try {      
        console.log(`Url:${url}, Token:${token}`);
                  
        const data = await api.shortenUrl(url, token);
        return data.data.shortCode;
    } catch (error) {
        console.error('Failed to shorten URL:', error);        
        throw error;
    }

}

export const useGetShortenUrl = () => {
    
    return useMutation({
        mutationFn: ({ longUrl, token }: { longUrl: string; token: string | null }) => fetchShortenedUrl(longUrl, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['urls'] });
        }
    })

}