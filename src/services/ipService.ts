export const getIpInfo = async()=>{
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Failed to fetch IP info');
        }
        const data = await response.json();
        return {
            ip: data.ip,
            country: data.country_name,
        };
    } catch (error) {
        console.error('Error fetching IP info:', error);
        return {
            ip: 'Unknown',
            country: 'Unknown',
        };
    }
}