import { UrlBlock } from "@/components/urlBlock";
import { useGetUrls } from "@/hooks/useGetUrls";
import { useMemo } from "react";

type UrlData = {
    id: string;
    originalUrl: string;
    shortCode: string;
    createdAt: string;
    clickLogs: ClickLog[];
};
type ClickLog = {
    id: string;
    urlId: string;
    ip: string;
    userAgent: string;
    country: string;
    clickedAt: string;
};

export const Analytics = () => {
    const { data: urls, isLoading } = useGetUrls();
    // const [inputValue, setInputValue] = useState("");

    const totalClicks = useMemo(() => {
        if (!urls) return 0;
        return urls.reduce((acc:number, url: UrlData) => acc + (url.clickLogs ? url.clickLogs.length : 0), 0);
    }, [urls]);

    const avgClicksPerUrl = useMemo(() => {
        if (!urls || urls.length === 0) return 0;
        return totalClicks / urls.length;
    }, [totalClicks, urls]);


    // const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(e.target.value);
        
    // }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-slate-600">Loading...</div>
            </div>
        );
    }

    if (!urls || urls.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-slate-600">No URLs found.</div>
            </div>
        );
    }

    return (
        <>
        <div className="p-5 m-4">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Analytics Dashboard</h1>
            <div>Total URLs: {urls.length}</div>
            <div>Total Clicks: {totalClicks}</div>
            <div>Avg Clicks per URL: {avgClicksPerUrl}</div>
        </div>
        <div className="p-6">
            {/* <input
                type="text"
                placeholder="Search URLs by short code"
                className="w-full mb-6 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                value={inputValue}
                onChange={handelInputChange}
            /> */}
            
         {urls.map((url: UrlData) => <UrlBlock key={url.id} urlData={url} />)}
        </div>
        </>
    );
};