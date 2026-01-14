import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { RedirectPage } from "./pages/redirectPage";
import { Analytics } from "./pages/analytics";


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
    }
]);

export default router;