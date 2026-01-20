import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { RedirectPage } from "./pages/redirectPage";
import { Analytics } from "./pages/analytics";
import { UrlDetailPage } from "./pages/urlDetailPage";
import { NotFound } from "./pages/notFound";


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
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;