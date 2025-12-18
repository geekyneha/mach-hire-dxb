import StructuredData from "./StructuredData";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UAE Machinery Rentals",
    url: "https://uaemachineryrentals.ae",
    logo: "https://uaemachineryrentals.ae/logo.png",

    description:
      "UAE Machinery Rentals provides construction equipment rental services across UAE including excavators, dump trucks, cranes, and forklifts.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971509734271",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
  };

  return <StructuredData data={schema} />;
};

export default OrganizationSchema;
