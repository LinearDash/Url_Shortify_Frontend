import { UrlBlock } from "@/components/urlBlock";
import { useGetUrls } from "@/hooks/useGetUrls";
import { TrendingUp } from "lucide-react";
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
         {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold text-foreground">URL Analytics</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-border bg-secondary/50">
              <div className="text-sm text-muted-foreground mb-1 font-bold">Total URLs</div>
              <div className="text-2xl font-bold text-foreground">{urls.length}</div>
            </div>
            <div className="p-4 rounded-lg border border-border bg-secondary/50">
              <div className="text-sm text-muted-foreground mb-1 font-bold">Total Clicks</div>
              <div className="text-2xl font-bold text-primary">{totalClicks}</div>
            </div>
            <div className="p-4 rounded-lg border border-border bg-secondary/50">
              <div className="text-sm text-muted-foreground mb-1 font-bold">Avg Clicks/URL</div>
              <div className="text-2xl font-bold text-foreground">{avgClicksPerUrl}</div>
            </div>
          </div>
        </div>
      </div>
           <div className="p-6 mb-6 max-w-7xl mx-auto">
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