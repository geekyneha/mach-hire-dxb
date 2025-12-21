import styles from "./Excavators.module.css";
import backhoe1 from "../../assets/backhoe1.webp";
import backhoe2 from "../../assets/backhoe2.webp";
import backhoe3 from "../../assets/backhoe3.webp";
import StructuredData from "../SEO/StructuredData";

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
  return (
    <section className={styles.page}>
      {/* ✅ SEO Structured Data */}
      <StructuredData data={backhoeLoaderSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Backhoe Loaders for Rent</h1>
        <p>
          Multi-purpose backhoe loaders combining excavation and loading
          capabilities, ideal for a wide range of construction applications.
        </p>
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
            <img src={item.image} alt={item.title} />
          </div>

          <div className={styles.content}>
            <h2>{item.title}</h2>

            <div className={styles.specs}>
              <span className={styles.tons}>{item.tons}</span>
              <span className={styles.bucket}>
                Front Bucket Capacity: {item.bucket}
              </span>
            </div>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Includes:</span>
              <ul>
                <li>Daily / Weekly / Monthly Rental</li>
                <li>Skilled Operator Available</li>
                <li>Suitable for Excavation & Loading Work</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BackhoeLoaders;
