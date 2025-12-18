import styles from "./Excavators.module.css";
import bobcat1 from "../../assets/bobcat1.png";
import bobcat2 from "../../assets/bobcat2.png";
import bobcat3 from "../../assets/bobcat3.png";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";

const bobcats = [
  {
    title: "Compact Bobcats",
    tons: "Small Frame Skid Steers",
    description:
      "Compact bobcats suitable for tight spaces, indoor works, landscaping, trench backfilling, and small construction tasks.",
    image: bobcat1,
  },
  {
    title: "Standard Bobcats",
    tons: "Medium Frame Skid Steers",
    description:
      "Standard bobcats ideal for general construction, material loading, site cleanup, and utility work across job sites.",
    image: bobcat2,
  },
  {
    title: "Heavy Duty Bobcats",
    tons: "Large Frame Skid Steers",
    description:
      "Heavy-duty bobcats designed for demanding construction environments, bulk material handling, and continuous operation.",
    image: bobcat3,
  },
];
const bobcatSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bobcats & Skid Steers for Rent in UAE",
  description:
    "Bobcat and skid steer loader rental services in UAE for compact construction and landscaping work.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Bobcat Skid Steer Loaders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://uaemachineryrentals.ae/equipment/bobcats/skid-steers",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const Bobcats = () => {
  return (
    <section className={styles.page}>
      <SEO
        title="Bobcats & Skid Steer Loaders for Rent in UAE"
        description="Rent bobcats and skid steer loaders in UAE for compact construction, landscaping, and site work."
        canonical="https://uaemachineryrentals.ae/equipment/bobcats/skid-steers"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={bobcatSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Bobcats / Skid Steer Loaders for Rent</h1>
        <p>
          Versatile skid steer loaders available for material handling,
          excavation support, landscaping, and site preparation tasks.
        </p>
      </div>

      {/* Bobcat Sections */}
      {bobcats.map((item, index) => (
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
                <li>Multiple Attachments Available</li>
                <li>Ideal for Confined & Urban Sites</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Bobcats;
