import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Administrator from "../views/Administrator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/administrator",
        element: <Administrator />
    }
]);


export default router;