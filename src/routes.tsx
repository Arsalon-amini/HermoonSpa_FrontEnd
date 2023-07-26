import { createBrowserRouter } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: '/customers', element: <CustomersPage /> },
])

export default router;