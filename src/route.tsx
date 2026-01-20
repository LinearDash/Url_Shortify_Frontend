import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { RedirectPage } from "./pages/redirectPage";
import { Analytics } from "./pages/analytics";
import { UrlDetailPage } from "./pages/urlDetailPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/:shortCode",
        element: <RedirectPage />,
    },
    {
        path: "/analytics",
        element: <Analytics />,
    },
    {
        path: "/analytics/:shortCode",
        element: <UrlDetailPage />,
    }
]);

export default router;