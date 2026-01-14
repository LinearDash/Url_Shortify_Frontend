const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
    async shortenUrl(longUrl: string){        
        const response = await fetch(`${API_BASE_URL}/url/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ originalUrl: longUrl }),
        });
        
        if (!response.ok) {
            const errorData = await response.json();            
            throw new Error(errorData.errors[0].message || 'Failed to shorten URL');
        }
        return response.json();
    },
    async getUrlDetails(shortCode: string){
        const response = await fetch(`${API_BASE_URL}/url/${shortCode}`);
        
        if (!response.ok) {
            const errorData = await response.json();            
            throw new Error(errorData.message|| 'Failed to retrieve original URL');            
        }

        return response.json();

    },
    async getUrls(){
        const response = await fetch(`${API_BASE_URL}/url`,{
            method: 'GET',
        });
        
        if (!response.ok) {
            const errorData = await response.json();            
            throw new Error(errorData.message|| 'Failed to retrieve URLs');            
        }
        
        return response.json();
    },
}