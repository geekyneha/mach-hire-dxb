import styles from "./Excavators.module.css";
import dump1 from "../../assets/dump1.webp";
import dump2 from "../../assets/dump2.webp";
import dump3 from "../../assets/dump3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const copy = t("equipmentDetails.dumpTrucks", { returnObjects: true });
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
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
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
            <img src={item.image} alt={copy.items[index].title} />
          </div>

          <div className={styles.content}>
            <h2>{copy.items[index].title}</h2>
            <span className={styles.capacity}>{copy.items[index].capacity}</span>

            <p>{copy.items[index].description}</p>

            <div className={styles.rentBox}>
              <span>{copy.rentalHeading}</span>
              <ul>
                {copy.rentalItems.map((rentalItem) => (
                  <li key={rentalItem}>{rentalItem}</li>
                ))}
              </ul>
            </div>

            <button
              className={styles.cta}
              onClick={() => handleQuoteClick(item)}
            >
              {copy.quote}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DumpTrucks;
