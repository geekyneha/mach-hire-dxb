import styles from "./Excavators.module.css";
import compactor1 from "../../assets/compactor1.png";
import compactor2 from "../../assets/compactor2.png";
import compactor3 from "../../assets/compactor3.png";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";

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
        <h1>Compactors for Rent</h1>
        <p>
          Reliable compaction equipment available for soil, asphalt, and surface
          preparation across all types of construction projects.
        </p>
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
            <img src={item.image} alt={item.title} />
          </div>

          <div className={styles.content}>
            <h2>{item.title}</h2>

            <div className={styles.specs}>
              <span className={styles.tons}>{item.tons}</span>
            </div>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Includes:</span>
              <ul>
                <li>Daily / Weekly / Monthly Rental</li>
                <li>Available with Skilled Operator</li>
                <li>Suitable for Soil & Asphalt Compaction</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Compactor;
