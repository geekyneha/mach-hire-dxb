import styles from "./Excavators.module.css";
import compactor1 from "../../assets/compactor1.webp";
import compactor2 from "../../assets/compactor2.webp";
import compactor3 from "../../assets/compactor3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

const compactors = [
  {
    title: "Light Compactors",
    tons: "Walk-Behind / Small Ride-On",
    description:
      "Light compactors suitable for sidewalks, trenches, landscaping, and small patchwork where precision compaction is required.",
    image: compactor1,
  },
  {
    title: "Medium Compactors",
    tons: "Single Drum / Tandem Rollers",
    description:
      "Medium compactors ideal for road maintenance, parking areas, and general construction projects requiring uniform surface compaction.",
    image: compactor2,
  },
  {
    title: "Heavy Duty Compactors",
    tons: "Vibratory Rollers",
    description:
      "Heavy-duty compactors designed for highways, large infrastructure projects, and soil compaction over extensive work areas.",
    image: compactor3,
  },
];
const compactorSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Compactors for Rent in UAE",
  description:
    "Compactor rental services in UAE for soil, asphalt, and road construction projects.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Soil Compactors",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/compactors",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Road Rollers & Asphalt Compactors",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/compactors",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const Compactor = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.compactors", { returnObjects: true });
  return (
    <section className={styles.page}>
      <SEO
        title="Compactors for Rent in UAE | UAE Machinery Rentals"
        description="Soil and asphalt compactors available for rent in UAE for road and infrastructure projects."
        canonical="https://www.uaemachineryrentals.ae/equipment/compactors"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={compactorSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
      </div>

      {/* Compactor Sections */}
      {compactors.map((item, index) => (
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

export default Compactor;
