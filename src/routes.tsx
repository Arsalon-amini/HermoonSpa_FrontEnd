import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import BookingPage from "./pages/BookingPage";
import ClassesPage from "./pages/ClassesPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Sandbox from "./pages/Sanbox";
import TestimonialsPage from "./pages/TestimonialsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutUsPage /> },
  { path: "/Products", element: <ProductsPage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/classes", element: <ClassesPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/sandbox", element: <Sandbox /> },
]);

export default router;
