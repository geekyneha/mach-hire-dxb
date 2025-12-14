import styles from "./WhyChooseUs.module.css";
import { FiTruck, FiTool, FiClock, FiShield } from "react-icons/fi";

const reasons = [
  {
    icon: <FiTool />,
    title: "Well-Maintained Equipment",
    desc: "All machinery is regularly serviced and inspected to ensure maximum performance and safety on site.",
  },
  {
    icon: <FiClock />,
    title: "On-Time Delivery",
    desc: "We value your timelines and guarantee prompt delivery and pickup for every rental.",
  },
  {
    icon: <FiTruck />,
    title: "Wide Fleet Availability",
    desc: "From excavators to dump trucks, our diverse fleet meets projects of all sizes.",
  },
  {
    icon: <FiShield />,
    title: "Safety & Reliability",
    desc: "Our equipment meets industry safety standards, giving you peace of mind on every job.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>WHY CHOOSE US</span>
        <h2>
          Trusted Equipment Rental <br />
          Partner for Your Projects
        </h2>
        <p className={styles.subtitle}>
          We combine experience, quality equipment, and reliable service to help
          you complete projects efficiently and safely.
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
