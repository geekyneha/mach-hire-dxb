import "./App.css";
import Home from "./pages/Home.jsx";
import Equipments from "./pages/Equipments.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import Services from "./pages/Services.jsx";
import Layout from "./pages/Layout.jsx";
import FAQ from "./pages/FAQ.jsx";
// equipment-specific components consolidated into dynamic CategoryPage
import { createBrowserRouter, RouterProvider } from "react-router";
import CategoryPage from "./components/Category/CategoryPage.jsx";
import Careers from "./pages/Careers.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // ⭐ COMMON LAYOUT
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/equipment", element: <Equipments /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/booking", element: <Booking /> },
        { path: "/faq", element: <FAQ /> },
        { path: "/careers", element: <Careers /> },
        // specific equipment pages are handled by the dynamic route below
        {
          path: "/equipment/:category",
          element: <CategoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
