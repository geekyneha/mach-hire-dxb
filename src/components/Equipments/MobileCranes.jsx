import styles from "./Excavators.module.css";
import crane1 from "../../assets/crane1.webp";
import crane2 from "../../assets/crane2.webp";
import crane3 from "../../assets/crane3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";
const mobileCranes = [
  {
    title: "Compact Mobile Cranes",
    tons: "10 – 25 Ton Capacity",
    description:
      "Compact mobile cranes suitable for confined job sites, indoor lifting operations, equipment installation, and urban construction projects.",
    image: crane1,
  },
  {
    title: "Standard Mobile Cranes",
    tons: "30 – 70 Ton Capacity",
    description:
      "Standard mobile cranes ideal for general construction, steel erection, precast installation, and infrastructure projects.",
    image: crane2,
  },
  {
    title: "Heavy Duty Mobile Cranes",
    tons: "80 – 200+ Ton Capacity",
    description:
      "Heavy-duty mobile cranes designed for major infrastructure works, industrial projects, power plants, and heavy lifting operations.",
    image: crane3,
  },
];

const mobileCraneSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mobile Cranes for Rent in UAE",
  description:
    "Mobile crane rental services in UAE for lifting, construction, and industrial operations.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Standard Mobile Cranes",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/mobile-cranes",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Heavy Duty Mobile Cranes",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/mobile-cranes",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const MobileCranes = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.mobileCranes", { returnObjects: true });
  return (
    <section className={styles.page}>
      <SEO
        title="Mobile Cranes for Rent in UAE | UAE Machinery Rentals"
        description="Rent mobile cranes in UAE for lifting, construction, and industrial projects with certified operators."
        canonical="https://www.uaemachineryrentals.ae/equipment/mobile-cranes"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={mobileCraneSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
      </div>

      {/* Mobile Crane Sections */}
      {mobileCranes.map((item, index) => (
        <div
          key={item.title}
          className={`${styles.section} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={copy.items[index].title} />
          </div>

          <div className={styles.content}>
            <h2>{copy.items[index].title}</h2>

            <div className={styles.specs}>
              <span className={styles.tons}>{copy.items[index].capacity}</span>
            </div>

            <p>{copy.items[index].description}</p>

            <div className={styles.rentBox}>
              <span>{copy.rentalHeading}</span>
              <ul>
                {copy.rentalItems.map((rentalItem) => (
                  <li key={rentalItem}>{rentalItem}</li>
                ))}
              </ul>
            </div>

            <button className={styles.cta}>{copy.quote}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileCranes;
