import { UrlBlock } from "@/components/urlBlock";
import { useState } from "react";

export const Analytics = () => {
    const [urls] = useState([
        {
            id: "cmk8rrswo00002gbg9vk59t2a",
            originalUrl: "https://github.com/LinearDash/Url_Shortify_Frontend",
            shortCode: "nOf1Yb",
            createdAt: "2026-01-10T20:40:33.048Z",
        },
        {
            id: "cmk8v0u5h00002ghjx6q4qz53",
            originalUrl:
                "https://console.prisma.io/cmejvnrb301e2ylebjvvjdqbv/cmk5x7h0y021t19focg0hhehg/cmk5x7h0y021p19fodruul85m/studio#table=Url&schema=public&view=table",
            shortCode: "1kUeFY",
            createdAt: "2026-01-10T22:11:33.413Z",
        },
        {
            id: "cmk9ah5sg00001ygwfs0du3hu",
            originalUrl: "https://lraman.com.np",
            shortCode: "2JulG9",
            createdAt: "2026-01-11T05:24:09.232Z",
        },
        {
            id: "cmk9ge1qa00001yd413mqu3ky",
            originalUrl: "https://anytimeflavours.blanxer.io/checkout",
            shortCode: "elErCM",
            createdAt: "2026-01-11T08:09:41.697Z",
        },
        {
            id: "cmk9gfujb00011yd4fg8lcmeu",
            originalUrl:
                "https://harimanga.me/manga/undercover-chaebol-high-school/chapter-38/",
            shortCode: "u3zUUI",
            createdAt: "2026-01-11T08:11:05.687Z",
        },
    ]);

    return (
        <div className="p-6">
         {urls.map(url => <UrlBlock key={url.id} urlData={url} />)}
        </div>
    );
};