import { api } from "@/lib/api";
import { getIpInfo } from "@/services/ipService";
import { useMutation } from "@tanstack/react-query";

const createClickLog = async(urlShortCode: string)=>{
    try {

        const{ip, country}= await getIpInfo()
        const data = await api.createClickLog(urlShortCode, ip, country);
        return data.data;
    } catch (error) {
        console.error("Failed to create click log:", error);
        throw error;
    }

}

export const useCreateClick = () => {
    return useMutation({
        mutationFn: (urlShortCode: string) => createClickLog(urlShortCode),
    });
}