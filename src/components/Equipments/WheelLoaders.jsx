import styles from "./Excavators.module.css";
import loaders1 from "../../assets/loaders1.png";
import loaders2 from "../../assets/loaders2.png";
import loaders3 from "../../assets/loaders3.png";
import loaders4 from "../../assets/loaders4.png";
import StructuredData from "../SEO/StructuredData";
import SEO from "../SEO/SEO";
const wheelLoaders = [
  {
    title: "Compact Wheel Loaders",
    tons: "3 – 6 Tons",
    bucket: "0.8 – 1.2 m³",
    description:
      "Compact wheel loaders ideal for light-duty material handling, landscaping, warehouses, and small construction sites with limited space.",
    image: loaders1,
  },
  {
    title: "Standard Wheel Loaders",
    tons: "7 – 10 Tons",
    bucket: "1.3 – 1.8 m³",
    description:
      "Efficient loaders suitable for general construction, road works, stockyards, and medium-scale loading operations.",
    image: loaders2,
  },
  {
    title: "Heavy Wheel Loaders",
    tons: "11 – 18 Tons",
    bucket: "2.0 – 3.0 m³",
    description:
      "Powerful machines designed for demanding construction sites, industrial yards, and continuous material handling tasks.",
    image: loaders3,
  },
  {
    title: "Extra Heavy Wheel Loaders",
    tons: "19 – 30+ Tons",
    bucket: "3.2 – 5.5 m³",
    description:
      "High-capacity wheel loaders built for large infrastructure projects, quarries, ports, and bulk material operations.",
    image: loaders4,
  },
];

const wheelLoaderSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Wheel Loaders for Rent in UAE",
  description:
    "Wheel loader rental services in UAE for construction, material handling, and infrastructure projects.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Compact Wheel Loaders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://uaemachineryrentals.ae/equipment/wheel-loaders",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Standard Wheel Loaders",
      brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
      offers: {
        "@type": "Offer",
        url: "https://uaemachineryrentals.ae/equipment/wheel-loaders",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  ],
};

const WheelLoaders = () => {
  const handleQuoteClick = (loader) => {
    const message = `Hello, I would like to request a quotation for the ${loader.title} (${loader.tons}, Bucket Capacity: ${loader.bucket}). Please provide rental options and pricing.`;
    const phoneNumber = "971509734271"; //
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.page}>
      <SEO
        title="Wheel Loaders for Rent in UAE | UAE Machinery Rentals"
        description="Wheel loaders available for rent in UAE for construction, material handling, and infrastructure projects."
        canonical="https://uaemachineryrentals.ae/equipment/wheel-loaders"
      />

      {/* ✅ SEO Structured Data */}
      <StructuredData data={wheelLoaderSchema} />
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Wheel Loaders for Rent</h1>
        <p>
          Reliable wheel loaders available in multiple sizes with different
          bucket capacities to handle all types of material loading
          requirements.
        </p>
      </div>

      {/* Wheel Loader Sections */}
      {wheelLoaders.map((item, index) => (
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
              <span className={styles.tons}>
                {"Tons: " + item.tons + ", Bucket Capacity: " + item.bucket}
              </span>
            </div>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Options:</span>
              <ul>
                <li>Daily / Weekly / Monthly Rental</li>
                <li>Available with Skilled Operator</li>
                <li>Well-maintained & Job-site Ready</li>
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

export default WheelLoaders;
