import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Sandbox from "./pages/Sanbox";


const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sandbox", element: <Sandbox /> },
  { path: "/Products", element: <ProductsPage /> },
  { path: "/about", element: <AboutUsPage /> },
]);

export default router;