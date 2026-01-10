import { useGetOriginalUrl } from "@/hooks/useGetOriginalUrl";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const RedirectPage = () => {
    const { shortCode } = useParams();
    const { data: originalUrl } = useGetOriginalUrl(shortCode || "");

    useEffect(() => {
        if (originalUrl) {
            window.location.href = originalUrl;
        }
    }, [originalUrl]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
            <p className="text-lg text-gray-600">Please wait while we redirect you to your destination.</p>
        </div>
    );
}