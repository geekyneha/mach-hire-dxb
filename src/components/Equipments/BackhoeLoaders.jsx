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
  "@graph": [
    {
      "@type": "Service",
      "@id":
        "https://www.uaemachineryrentals.ae/equipment/backhoe-loaders#service",
      name: "Backhoe Loader Rental in UAE",
      description:
        "Backhoe loader rental services across the UAE for excavation, construction, road works, trenching, loading, and material handling.",
      url: "https://www.uaemachineryrentals.ae/equipment/backhoe-loaders",
      provider: {
        "@type": "Organization",
        name: "UAE Machinery Rentals",
        url: "https://www.uaemachineryrentals.ae/",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Backhoe Loader Rental Equipment",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Compact Backhoe Loaders",
            itemListElement: {
              "@type": "Service",
              name: "Compact Backhoe Loader Rental",
              description:
                "6–8 ton compact backhoe loaders for urban construction, trenching, and utility works.",
            },
          },
          {
            "@type": "OfferCatalog",
            name: "Standard Backhoe Loaders",
            itemListElement: {
              "@type": "Service",
              name: "Standard Backhoe Loader Rental",
              description:
                "8–10 ton backhoe loaders for general construction, road works, excavation, and material handling.",
            },
          },
          {
            "@type": "OfferCatalog",
            name: "Heavy Duty Backhoe Loaders",
            itemListElement: {
              "@type": "Service",
              name: "Heavy Duty Backhoe Loader Rental",
              description:
                "10–12+ ton heavy-duty backhoe loaders for demanding construction and excavation projects.",
            },
          },
        ],
      },
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
