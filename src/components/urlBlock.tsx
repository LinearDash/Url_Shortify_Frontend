import { Link } from "react-router-dom";
import { Card } from "./ui/card";

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
    <Link to={`/analytics/${urlData.shortCode}`}>
    <Card className="w-full border border-border bg-card hover:bg-neutral-100 transition-colors cursor-pointer mb-3" >
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-slate-900">{urlData.shortCode}</h3>
                <div className="text-sm text-slate-900">Clicks: <span className="text-blue-600 font-bold">{totalClicks}</span></div>
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
    </Card>
    </Link>
    );
};