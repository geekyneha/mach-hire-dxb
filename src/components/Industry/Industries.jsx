import styles from "./Industries.module.css";
import {
  FiHome,
  FiTruck,
  FiLayers,
  FiSettings,
  FiMap,
  FiActivity,
} from "react-icons/fi";

const industries = [
  { icon: <FiHome />, title: "Construction" },
  { icon: <FiLayers />, title: "Infrastructure" },
  { icon: <FiTruck />, title: "Logistics & Transport" },
  { icon: <FiSettings />, title: "Industrial Projects" },
  { icon: <FiMap />, title: "Mining & Earthworks" },
  { icon: <FiActivity />, title: "Oil & Gas" },
];

const Industries = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>INDUSTRIES</span>
        <h2>Industries We Serve</h2>
        <p>
          Our equipment supports a wide range of industries, delivering
          performance, safety, and reliability on every site.
        </p>

        <div className={styles.grid}>
          {industries.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
