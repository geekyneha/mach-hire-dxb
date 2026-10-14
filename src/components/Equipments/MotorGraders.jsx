import styles from "./Excavators.module.css";
import grader1 from "../../assets/grader1.webp";
import grader2 from "../../assets/grader2.webp";
import grader3 from "../../assets/grader3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

const motorGraders = [
  {
    title: "Compact Motor Graders",
    tons: "10 – 13 Tons",
    description:
      "Compact motor graders suitable for light road maintenance, site leveling, finishing works, and projects with limited maneuvering space.",
    image: grader1,
  },
  {
    title: "Standard Motor Graders",
    tons: "14 – 18 Tons",
    description:
      "Standard graders ideal for road construction, grading, slope shaping, and medium-scale infrastructure development projects.",
    image: grader2,
  },
  {
    title: "Heavy Duty Motor Graders",
    tons: "19 – 25+ Tons",
    description:
      "Heavy-duty motor graders designed for highways, large infrastructure projects, mining access roads, and continuous grading operations.",
    image: grader3,
  },
];
const motorGraderSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Motor Graders for Rent in UAE",
  description:
    "Motor grader rental in UAE for road construction, leveling, and surface finishing.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Compact Motor Graders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/motor-graders",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Heavy Motor Graders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://www.uaemachineryrentals.ae/equipment/motor-graders",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const MotorGraders = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.motorGraders", { returnObjects: true });
  return (
    <section className={styles.page}>
      <SEO
        title="Motor Graders for Rent in UAE | UAE Machinery Rentals"
        description="Motor graders available for rent in UAE for road construction, leveling, and grading projects."
        canonical="https://www.uaemachineryrentals.ae/equipment/motor-graders"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={motorGraderSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
      </div>

      {/* Motor Grader Sections */}
      {motorGraders.map((item, index) => (
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

export default MotorGraders;
