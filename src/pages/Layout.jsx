import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import StructuredData from "../components/SEO/StructuredData";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "UAE Machinery Rentals",
  url: "https://www.uaemachineryrentals.ae",
  logo: "https://www.uaemachineryrentals.ae/logo.png",
  description:
    "UAE Machinery Rentals provides construction equipment and heavy machinery on rent across UAE.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  sameAs: [],
};
export default function Layout() {
  return (
    <>
      <StructuredData data={businessSchema} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
