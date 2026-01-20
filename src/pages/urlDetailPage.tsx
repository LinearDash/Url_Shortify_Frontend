import { useGetUrlDetails } from "@/hooks/useGetUrlDetails";
import { useParams } from "react-router-dom";

export const UrlDetailPage = () => {
    const { shortCode } = useParams();
    
    const { data: urlDetail, isLoading, error } = useGetUrlDetails(shortCode || "");

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-slate-600">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-red-600">Error loading URL details</div>
            </div>
        );
    }

    if (!urlDetail?.data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-slate-600">URL not found</div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 mb-6">URL Details</h1>
                <pre className="bg-white p-6 rounded-lg border border-slate-200 overflow-auto">
                    {JSON.stringify(urlDetail, null, 2)}
                </pre>
            </div>
        </div>
    );
}