import { useGetUrlDetails } from "@/hooks/useGetUrlDetails";
import { useParams } from "react-router-dom";

type ClickLog = {
    id: string;
    urlId: string;
    ip: string;
    userAgent: string;
    country: string;
    clickedAt: string;
};

export const UrlDetailPage = () => {
    const { shortCode } = useParams();
    
    const { data: urlDetail, isLoading, error } = useGetUrlDetails(shortCode || "");

    console.log(urlDetail);
    

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
                <h1 className="text-3xl font-bold text-slate-900 mb-6 mt-6">Click Log</h1>
                <div className="bg-white rounded-lg border border-slate-200 overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-100 border-b border-slate-200">
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Timestamp</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">User Agent</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">IP Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urlDetail.data.clickLogs?.length ? (
                                urlDetail.data.clickLogs.map((log: ClickLog, index: number) => (
                                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="px-6 py-3 text-sm text-slate-700">{new Date(log.clickedAt).toLocaleString()}</td>
                                        <td className="px-6 py-3 text-sm text-slate-700">{log.userAgent}</td>
                                        <td className="px-6 py-3 text-sm text-slate-700">{log.ip }</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-3 text-sm text-slate-700 text-center">No clicks yet</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}