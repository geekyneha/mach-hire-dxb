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
import CategoryPage from "./components/Category/CategoryPage.jsx";
import Careers from "./pages/Careers.jsx";
import WheelLoaders from "./components/Equipments/WheelLoaders.jsx";
import DumpTrucks from "./components/Equipments/DumpTrucks.jsx";
import SixWheelers from "./components/Equipments/SixWheelers.jsx";
import BackhoeLoaders from "./components/Equipments/BackhoeLoaders.jsx";
import MobileCranes from "./components/Equipments/MobileCranes.jsx";
import MotorGraders from "./components/Equipments/MotorGraders.jsx";
import Forklifts from "./components/Equipments/Forklifts.jsx";
import Compactor from "./components/Equipments/Compactor.jsx";
import Bobcats from "./components/Equipments/Bobcats.jsx";

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
          path: "/equipment/backhoe-loaders",
          element: <BackhoeLoaders />,
        },
        {
          path: "/equipment/mobile-cranes",
          element: <MobileCranes />,
        },
        {
          path: "/equipment/motor-graders",
          element: <MotorGraders />,
        },
        {
          path: "/equipment/forklifts",
          element: <Forklifts />,
        },
        {
          path: "/equipment/bobcats/skid-steers",
          element: <Bobcats />,
        },
        {
          path: "/equipment/compactors",
          element: <Compactor />,
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
