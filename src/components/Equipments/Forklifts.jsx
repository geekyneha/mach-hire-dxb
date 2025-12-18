import styles from "./Excavators.module.css";
import forklift1 from "../../assets/forklift1.png";
import forklift2 from "../../assets/forklift2.png";
import forklift3 from "../../assets/forklift3.png";

const forklifts = [
  {
    title: "Light Duty Forklifts",
    tons: "2 – 3 Ton Capacity",
    description:
      "Light-duty forklifts suitable for warehouses, indoor facilities, loading docks, and light material handling operations.",
    image: forklift1,
  },
  {
    title: "Standard Forklifts",
    tons: "3 – 5 Ton Capacity",
    description:
      "Standard forklifts ideal for construction sites, logistics yards, and general-purpose lifting and stacking tasks.",
    image: forklift2,
  },
  {
    title: "Heavy Duty Forklifts",
    tons: "6 – 10+ Ton Capacity",
    description:
      "Heavy-duty forklifts designed for ports, industrial plants, steel yards, and heavy material handling requirements.",
    image: forklift3,
  },
];

const Forklifts = () => {
  return (
    <section className={styles.page}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Forklifts for Rent</h1>
        <p>
          Reliable forklifts available in multiple lifting capacities for
          warehouse, industrial, and construction applications.
        </p>
      </div>

      {/* Forklift Sections */}
      {forklifts.map((item, index) => (
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
              <span className={styles.tons}>{item.tons}</span>
            </div>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Includes:</span>
              <ul>
                <li>Daily / Weekly / Monthly Rental</li>
                <li>Available with Trained Operator</li>
                <li>Indoor & Outdoor Operation Options</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Forklifts;
