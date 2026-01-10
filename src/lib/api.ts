const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
    async shortenUrl(longUrl: string){
        console.log(JSON.stringify({ originalUrl: longUrl }),);
        
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
    }
}