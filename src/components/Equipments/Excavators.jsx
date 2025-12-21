import styles from "./Excavators.module.css";
import excavator1 from "../../assets/excavator1.webp";
import excavator2 from "../../assets/excavator2.webp";
import excavator3 from "../../assets/hero.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";

/* ================================
   EXCAVATOR DATA
================================ */
const excavators = [
  {
    title: "Small Excavators",
    tons: "1 – 6 Tons",
    description:
      "Compact excavators ideal for tight spaces, residential projects, landscaping, and utility work.",
    image: excavator1,
  },
  {
    title: "Medium Excavators",
    tons: "7 – 20 Tons",
    description:
      "Versatile excavators suitable for urban construction, road work, and medium-scale infrastructure projects.",
    image: excavator2,
  },
  {
    title: "Large Excavators",
    tons: "21+ Tons",
    description:
      "Heavy-duty machines built for mining, large construction sites, and high-load excavation work.",
    image: excavator3,
  },
];

/* ================================
   STRUCTURED DATA (SEO)
================================ */
const excavatorSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Excavator Rental Services in UAE",
  description:
    "Rent small, medium, and large excavators in UAE for construction, infrastructure, and industrial projects.",
  itemListElement: excavators.map((item, index) => ({
    "@type": "Product",
    position: index + 1,
    name: `${item.title} (${item.tons})`,
    description: item.description,
    brand: {
      "@type": "Brand",
      name: "UAE Machinery Rentals",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.uaemachineryrentals.ae/equipment/excavators",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  })),
};

/* ================================
   COMPONENT
================================ */
const Excavators = () => {
  const handleQuoteClick = (excavator) => {
    const message = `Hello, I would like to request a quotation for ${excavator.title} (${excavator.tons}). Please share availability and rental pricing.`;
    const phoneNumber = "971509734271";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.page}>
      <SEO
        title="Excavators for Rent in UAE | UAE Machinery Rentals"
        description="Rent excavators in UAE including small, medium, and heavy excavators for construction, road work, and infrastructure projects."
        canonical="https://www.uaemachineryrentals.ae/equipment/excavators"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={excavatorSchema} />

      {/* Page Header */}
      <div className={styles.header}>
        <h1>Excavators for Rent in UAE</h1>
        <p>
          Reliable excavators available in multiple sizes with flexible daily,
          weekly, and monthly rental plans.
        </p>
      </div>

      {/* Excavator Sections */}
      {excavators.map((item, index) => (
        <div
          key={item.title}
          className={`${styles.section} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={`${item.title} for rent in UAE`} />
          </div>

          <div className={styles.content}>
            <h2>{item.title}</h2>
            <span className={styles.tons}>{item.tons}</span>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Options:</span>
              <ul>
                <li>Daily Rental</li>
                <li>Weekly Rental</li>
                <li>Monthly Rental</li>
              </ul>
            </div>

            <button
              className={styles.cta}
              onClick={() => handleQuoteClick(item)}
            >
              Request Quote
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Excavators;
