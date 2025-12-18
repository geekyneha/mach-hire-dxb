import styles from "./WhyChooseUs.module.css";
import { FiTruck, FiTool, FiClock, FiShield } from "react-icons/fi";

const reasons = [
  {
    icon: <FiTool />,
    title: "Well-Maintained Construction Equipment",
    desc: "At UAE Machinery Rentals, all machinery is regularly serviced and inspected to ensure optimal performance, durability, and on-site safety.",
  },
  {
    icon: <FiClock />,
    title: "Guaranteed On-Time Delivery",
    desc: "We respect project timelines and ensure timely delivery and pickup of rental equipment across the UAE.",
  },
  {
    icon: <FiTruck />,
    title: "Extensive Fleet of Heavy Machinery",
    desc: "Our wide fleet includes excavators, dump trucks, loaders, and cranes suitable for construction, infrastructure, and industrial projects.",
  },
  {
    icon: <FiShield />,
    title: "Safety, Compliance & Reliability",
    desc: "All equipment meets UAE and international safety standards, providing reliable and secure operations on every job site.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>WHY CHOOSE UAE MACHINERY RENTALS</span>

        <h2>
          Trusted Heavy Equipment Rental <br />
          Partner in the UAE
        </h2>

        <p className={styles.subtitle}>
          UAE Machinery Rentals delivers reliable construction equipment rental
          solutions with quality machinery, experienced support, and dependable
          service to help you complete projects safely and efficiently.
        </p>

        <div className={styles.grid}>
          {reasons.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
