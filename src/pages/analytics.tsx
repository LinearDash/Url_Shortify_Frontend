import { UrlBlock } from "@/components/urlBlock";
import { useGetUrls } from "@/hooks/useGetUrls";

export const Analytics = () => {
    const { data: urls, isLoading } = useGetUrls();

    if (isLoading) {
        return <div className="p-6">Loading...</div>;
    }

    if (!urls || urls.length === 0) {
        return <div className="p-6">No URLs found.</div>;
    }

    return (
        <div className="p-6">
         {urls.map(url => <UrlBlock key={url.id} urlData={url} />)}
        </div>
    );
};