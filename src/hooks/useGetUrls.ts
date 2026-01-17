import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchUrls = async () => {
    try {        
        const data = await api.getUrls();
        return data.data;
    } catch (error) {
        console.error('Failed to fetch URLs:', error);        
        throw error;
    }

}

export const useGetUrls = () => {
    return useQuery({
        queryKey: ['urls'],
        queryFn: () => fetchUrls(),
    });
}