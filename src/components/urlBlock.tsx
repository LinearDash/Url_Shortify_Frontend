
type ClickLog = {
    id: string;
    urlId: string;
    ip: string;
    userAgent: string;
    country: string;
    clickedAt: string;
};

type UrlData = {
    id: string;
    originalUrl: string;
    shortCode: string;
    createdAt: string;
    clickLogs: ClickLog[];
};

type UrlBlockProps = {
    urlData: UrlData;
};

export const UrlBlock= ({ urlData }: UrlBlockProps) => {
    const totalClicks = urlData.clickLogs ? urlData.clickLogs.length : 0;
    return (
        <div className="w-full mb-4 bg-slate-50 rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-slate-900">{urlData.shortCode}</h3>
                <div className="text-sm text-slate-600">Clicks: {totalClicks}</div>
            </div>
            <div className="mb-2">
                <span className="text-sm text-slate-500">
                    {new Date(urlData.createdAt).toLocaleString()}
                </span>
            </div>
            <div className="space-y-2">
                <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-700">Original URL:</span> {urlData.originalUrl}
                </p>
                <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-700">ID:</span> {urlData.id}
                </p>
            </div>
        </div>
    );
};