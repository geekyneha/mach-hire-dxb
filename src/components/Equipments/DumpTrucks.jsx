import styles from "./Excavators.module.css";
import dump1 from "../../assets/dump1.png";
import dump2 from "../../assets/dump2.png";
import dump3 from "../../assets/dump3.png";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";

/* ================================
   DUMP TRUCK DATA
================================ */
const dumpTrucks = [
  {
    title: "Small Dump Trucks",
    capacity: "Up to 10 Tons",
    description:
      "Small dump trucks ideal for narrow access areas, residential projects, and light material transportation.",
    image: dump1,
  },
  {
    title: "Medium Dump Trucks",
    capacity: "10 – 20 Tons",
    description:
      "Medium dump trucks suitable for construction sites, road work, and bulk material handling.",
    image: dump2,
  },
  {
    title: "Heavy Dump Trucks",
    capacity: "20+ Tons",
    description:
      "Heavy-duty dump trucks designed for mining, large infrastructure projects, and high-volume hauling.",
    image: dump3,
  },
];

/* ================================
   STRUCTURED DATA (SEO)
================================ */
const dumpTruckSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dump Trucks for Rent in UAE",
  description:
    "Dump truck rental services in UAE including small, medium, and heavy dump trucks for construction and industrial projects.",
  itemListElement: dumpTrucks.map((item, index) => ({
    "@type": "Product",
    position: index + 1,
    name: `${item.title} (${item.capacity})`,
    description: item.description,
    brand: {
      "@type": "Brand",
      name: "UAE Machinery Rentals",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.uaemachineryrentals.ae/equipment/dump-trucks",
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
const DumpTrucks = () => {
  const handleQuoteClick = (truck) => {
    const message = `Hello, I would like to request a quotation for ${truck.title} (${truck.capacity}). Please share rental availability and pricing.`;
    const phoneNumber = "971509734271";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.page}>
      <SEO
        title="Dump Trucks for Rent in UAE | UAE Machinery Rentals"
        description="Rent dump trucks in UAE including small, medium, and heavy dump trucks for construction, road work, and industrial projects. Flexible rental plans available."
        canonical="https://www.uaemachineryrentals.ae/equipment/dump-trucks"
      />
      {/* ✅ SEO Structured Data */}
      <StructuredData data={dumpTruckSchema} />

      {/* Page Header */}
      <div className={styles.header}>
        <h1>Dump Trucks for Rent in UAE</h1>
        <p>
          Reliable dump trucks available for rent across UAE with flexible
          daily, weekly, and monthly rental options.
        </p>
      </div>

      {/* Dump Truck Sections */}
      {dumpTrucks.map((item, index) => (
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
            <span className={styles.capacity}>{item.capacity}</span>

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

export default DumpTrucks;
