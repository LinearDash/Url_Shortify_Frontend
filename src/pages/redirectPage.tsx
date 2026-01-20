import { useCreateClick } from "@/hooks/useCreateClick";
import { useGetOriginalUrl } from "@/hooks/useGetOriginalUrl";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const RedirectPage = () => {
    const { shortCode } = useParams();
    const { data: originalUrl, error } = useGetOriginalUrl(shortCode || "");
    const { mutate: logClick } = useCreateClick();

    useEffect(() => {
        if (originalUrl && shortCode) {
            logClick(shortCode, {
                onSuccess: () => {
                    window.location.href = originalUrl;
                },
                onError: (err) => {
                    console.error("Failed to log click:", err);
                    window.location.href = originalUrl;
                }
            });
        }
    }, [originalUrl, shortCode, logClick]);

    useEffect(() => { 
        if (error) {
            toast.error(error.message || "Failed to retrieve original URL.");
        }            
     },[error]);

     if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Error</h1>
                <p className="text-lg text-gray-600">{error.message || "An unexpected error occurred."}</p>

                <button onClick={() => window.location.href = "/"} className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 cursor-pointer">
                    Go Home
                </button>
            </div>
        );
     }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
            <p className="text-lg text-gray-600">Please wait while we redirect you to your destination.</p>
        </div>

    );
}