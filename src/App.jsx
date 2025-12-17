import "./App.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import Services from "./pages/Services.jsx";
import Layout from "./pages/Layout.jsx";
import FAQ from "./pages/FAQ.jsx";
import Excavators from "./components/Equipments/Excavators.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Equipments from "./pages/Equipments.jsx";
import CategoryPage from "./components/Category/CategoryPage.jsx";
import Careers from "./pages/Careers.jsx";
import WheelLoaders from "./components/Equipments/WheelLoaders.jsx";
import DumpTrucks from "./components/Equipments/DumpTrucks.jsx";
import SixWheelers from "./components/Equipments/SixWheelers.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // ⭐ COMMON LAYOUT
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/booking", element: <Booking /> },
        { path: "/faq", element: <FAQ /> },
        { path: "/careers", element: <Careers /> },
        { path: "/equipment/excavators", element: <Excavators /> },
        { path: "/equipment/wheel-loaders", element: <WheelLoaders /> },
        { path: "/equipment/dump-trucks", element: <DumpTrucks /> },
        {
          path: "/equipment/six-wheelers",
          element: <SixWheelers />,
        },
        {
          path: "/equipments",
          element: <Equipments />,
        },
        {
          path: "/equipments/:category",
          element: <CategoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
