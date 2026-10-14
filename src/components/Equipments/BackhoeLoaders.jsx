import styles from "./Excavators.module.css";
import backhoe1 from "../../assets/backhoe1.webp";
import backhoe2 from "../../assets/backhoe2.webp";
import backhoe3 from "../../assets/backhoe3.webp";
import StructuredData from "../SEO/StructuredData";
import { useTranslation } from "react-i18next";

const backhoeLoaders = [
  {
    title: "Compact Backhoe Loaders",
    tons: "6 – 8 Tons",
    bucket: "0.8 – 1.0 m³",
    description:
      "Compact backhoe loaders ideal for urban construction, trenching, utility works, and projects with limited working space.",
    image: backhoe1,
  },
  {
    title: "Standard Backhoe Loaders",
    tons: "8 – 10 Tons",
    bucket: "1.0 – 1.3 m³",
    description:
      "Versatile backhoe loaders suitable for general construction, road works, excavation, and material handling tasks.",
    image: backhoe2,
  },
  {
    title: "Heavy Duty Backhoe Loaders",
    tons: "10 – 12+ Tons",
    bucket: "1.3 – 1.6 m³",
    description:
      "Heavy-duty backhoe loaders built for demanding construction environments requiring higher digging depth and lifting capacity.",
    image: backhoe3,
  },
];
const backhoeLoaderSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Backhoe Loaders for Rent in UAE",
  description:
    "Backhoe loader rental services in UAE suitable for excavation, loading, and utility work.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Standard Backhoe Loaders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/backhoe-loaders",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const BackhoeLoaders = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.backhoeLoaders", { returnObjects: true });
  return (
    <section className={styles.page}>
      {/* ✅ SEO Structured Data */}
      <StructuredData data={backhoeLoaderSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
      </div>

      {/* Backhoe Loader Sections */}
      {backhoeLoaders.map((item, index) => (
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
              <span className={styles.bucket}>
                {copy.bucketLabel} {copy.items[index].bucket}
              </span>
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

export default BackhoeLoaders;
