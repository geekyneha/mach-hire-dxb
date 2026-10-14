import styles from "./Excavators.module.css";
import bobcat1 from "../../assets/bobcat1.webp";
import bobcat2 from "../../assets/bobcat2.webp";
import bobcat3 from "../../assets/bobcat3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

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
        url: "https://www.uaemachineryrentals.ae/equipment/bobcats/skid-steers",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const Bobcats = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.bobcats", { returnObjects: true });
  return (
    <section className={styles.page}>
      <SEO
        title="Bobcats & Skid Steer Loaders for Rent in UAE"
        description="Rent bobcats and skid steer loaders in UAE for compact construction, landscaping, and site work."
        canonical="https://www.uaemachineryrentals.ae/equipment/bobcats/skid-steers"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={bobcatSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
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

export default Bobcats;
