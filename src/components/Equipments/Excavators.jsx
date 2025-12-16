import styles from "./Excavators.module.css";

const excavators = [
  {
    title: "Small Excavators",
    tons: "1 – 6 Tons",
    description:
      "Compact excavators ideal for tight spaces, residential projects, landscaping, and utility work.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Hk8g53_seSEOALEq46EMf2sWl22b2PMLUQ&s",
  },
  {
    title: "Medium Excavators",
    tons: "7 – 20 Tons",
    description:
      "Versatile excavators suitable for urban construction, road work, and medium-scale infrastructure projects.",
    image:
      "https://utilitycontractormagazine.com/wp-content/uploads/2024/03/cat-325-excavator-3-1.jpg",
  },
  {
    title: "Large Excavators",
    tons: "21+ Tons",
    description:
      "Heavy-duty machines built for mining, large construction sites, and high-load excavation work.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZFzscvYdvQSdWhXfwztG0MPDrFBJq7DCYw&s",
  },
];

const Excavators = () => {
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

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Excavators;
