import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { RedirectPage } from "./pages/redirectPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/:shortCode",
        element: <RedirectPage />,
    }
]);

export default router;