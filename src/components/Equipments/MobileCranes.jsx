import styles from "./Excavators.module.css";
import crane1 from "../../assets/crane1.png";
import crane2 from "../../assets/crane2.png";
import crane3 from "../../assets/crane3.png";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
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
        <h1>Mobile Cranes for Rent</h1>
        <p>
          High-capacity mobile cranes available for safe and efficient lifting
          operations across construction, industrial, and infrastructure
          projects.
        </p>
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
                <li>Certified Crane Operator & Rigger</li>
                <li>Suitable for Heavy & Precision Lifting</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileCranes;
