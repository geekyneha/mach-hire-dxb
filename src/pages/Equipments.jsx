import { useState } from "react";
import styles from "./Equipments.module.css";

const EQUIPMENT_LIST = [
  {
    name: "Excavators",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df3b",
    details: [
      "Available in small, medium, and large tonnage configurations",
      "Suitable for excavation, trenching, demolition, and foundation work",
      "Flexible rental options: daily, weekly, and monthly",
      "Operator services available upon request",
    ],
    sizes: ["Mini (3–5 Tons)", "Medium (10–20 Tons)", "Heavy (30+ Tons)"],
  },
  {
    name: "Wheel Loaders",
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603",
    details: [
      "Used for material handling, loading, and stockpiling",
      "Multiple bucket capacities available",
      "Rental available on short-term and long-term basis",
      "Experienced operators can be arranged",
    ],
    sizes: ["Compact", "Standard", "Heavy-Duty"],
  },
  {
    name: "Dump Trucks",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8f71b2c",
    details: [
      "Ideal for transportation of soil, sand, and aggregates",
      "Different load capacities to match site requirements",
      "Daily, weekly, and monthly rental options",
      "Available with or without operator",
    ],
    sizes: ["6–8 Tons", "10–15 Tons", "20–30 Tons", "40+ Tons"],
  },
];

const Equipments = () => {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Our Equipment Fleet</h1>
          <p className={styles.subtitle}>
            We provide a wide range of well-maintained construction equipment
            suitable for infrastructure, industrial, and commercial projects.
          </p>
        </div>
      </section>

      {/* EQUIPMENT DETAILS */}
      <section className={styles.list}>
        {EQUIPMENT_LIST.map((item, index) => (
          <EquipmentCard
            key={item.name}
            item={item}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
};

export default Equipments;

/* ---------------- COMPONENT ---------------- */

const EquipmentCard = ({ item, reverse }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);

  const message = `
Hello,

I would like to request rental details for the following equipment:

Equipment: ${item.name}
Selected Size / Capacity: ${selectedSize}

Please share availability, rental rates, and terms.

Thank you.
`;

  const whatsappLink = `https://wa.me/97100000000?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.name} />
      </div>

      <div className={styles.content}>
        <h2>{item.name}</h2>

        <ul className={styles.features}>
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* SIZES */}
        <div className={styles.sizes}>
          <span className={styles.sizeLabel}>Available Sizes:</span>

          <div className={styles.sizeList}>
            {item.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`${styles.sizeTag} ${
                  selectedSize === size ? styles.active : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Request Rental Details on WhatsApp
        </a>
      </div>
    </div>
  );
};
