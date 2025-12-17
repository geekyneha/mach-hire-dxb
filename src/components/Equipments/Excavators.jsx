import styles from "./Excavators.module.css";
import excavator1 from "../../assets/excavator1.png";
import excavator2 from "../../assets/excavator2.png";
import excavator3 from "../../assets/hero.png";

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

const Excavators = () => {
  const handleQuoteClick = (excavator) => {
    const message = `Hello, I would like to request a quotation for the ${excavator.title} (${excavator.tons}). Please provide rental options and pricing.`;
    const phoneNumber = "971509734271"; // replace with your WhatsApp number with country code, e.g., 971XXXXXXXX
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.page}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Excavators for Rent</h1>
        <p>
          Reliable excavators available in multiple sizes with flexible rental
          plans.
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
            <img src={item.image} alt={item.title} />
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
