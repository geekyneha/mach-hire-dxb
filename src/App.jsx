import "./App.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import Services from "./pages/Services.jsx";
import Layout from "./pages/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
