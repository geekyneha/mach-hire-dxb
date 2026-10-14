import styles from "./Excavators.module.css";
import six1 from "../../assets/six1.webp";
import six2 from "../../assets/six2.webp";
import six3 from "../../assets/six3.webp";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

const sixWheelers = [
  {
    title: "Light Six Wheeler Trucks",
    tons: "10 – 12 Ton Trucks, ",
    payload: "Up to 7 Tons ",
    description:
      "Light six wheeler trucks suitable for small construction sites, short-distance material transport, and urban delivery work.",
    image: six1,
  },
  {
    title: "Standard Six Wheeler Trucks",
    tons: "13 – 18 Ton Trucks, ",
    payload: "Up to 10 Tons ",
    description:
      "Standard six wheelers ideal for sand, soil, and aggregate transport across medium construction and infrastructure projects.",
    image: six2,
  },
  {
    title: "Heavy Six Wheeler Trucks",
    tons: "19 – 25 Ton Trucks, ",
    payload: "Up to 14 Tons ",
    description:
      "Heavy-duty six wheelers designed for demanding construction environments and continuous material transportation tasks.",
    image: six3,
  },
];

const SixWheelers = () => {
  const { t } = useTranslation();
  const copy = t("equipmentDetails.sixWheelers", { returnObjects: true });
  const handleQuoteClick = (truck) => {
    const message = `Hello, I would like to request a quotation for the ${truck.title} (${truck.tons}, Payload: ${truck.payload}). Please provide rental options and pricing.`;
    const phoneNumber = "971509734271"; //
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const sixWheelerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Six Wheeler Trucks for Rent in UAE",
    description:
      "Six wheeler truck rental in UAE for transportation, construction material hauling, and logistics.",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Small Six Wheeler Trucks",
        brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
        offers: {
          "@type": "Offer",
          url: "https://www.uaemachineryrentals.ae/equipment/six-wheelers",
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
        },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
      },
      {
        "@type": "Product",
        position: 2,
        name: "Heavy Six Wheeler Trucks",
        brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
        offers: {
          "@type": "Offer",
          url: "https://www.uaemachineryrentals.ae/equipment/six-wheelers",
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
        },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
      },
    ],
  };

  return (
    <section className={styles.page}>
      <SEO
        title="Six Wheeler Trucks for Rent in UAE | UAE Machinery Rentals"
        description="Rent six wheeler trucks in UAE for material transportation, construction, and site operations."
        canonical="https://www.uaemachineryrentals.ae/equipment/six-wheelers"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={sixWheelerSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>{copy.heading}</h1>
        <p>{copy.intro}</p>
      </div>

      {/* Six Wheeler Sections */}
      {sixWheelers.map((item, index) => (
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
              <span className={styles.tons}>
                {`${copy.items[index].capacity} ${copy.payloadLabel} ${copy.items[index].payload}`}
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

export default SixWheelers;
