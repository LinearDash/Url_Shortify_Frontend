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
            throw new Error('Failed to shorten URL');
        }
        return response.json();
    },
    async getOrignialUrl(shortCode: string){
        const response = await fetch(`${API_BASE_URL}/url/${shortCode}`);
        
        if (!response.ok) {
            throw new Error('Failed to get original URL');
        }
        return response.json();
    }
}