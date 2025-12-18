import styles from "./Excavators.module.css";
import grader1 from "../../assets/grader1.png";
import grader2 from "../../assets/grader2.png";
import grader3 from "../../assets/grader3.png";

const motorGraders = [
  {
    title: "Compact Motor Graders",
    tons: "10 – 13 Tons",
    description:
      "Compact motor graders suitable for light road maintenance, site leveling, finishing works, and projects with limited maneuvering space.",
    image: grader1,
  },
  {
    title: "Standard Motor Graders",
    tons: "14 – 18 Tons",
    description:
      "Standard graders ideal for road construction, grading, slope shaping, and medium-scale infrastructure development projects.",
    image: grader2,
  },
  {
    title: "Heavy Duty Motor Graders",
    tons: "19 – 25+ Tons",
    description:
      "Heavy-duty motor graders designed for highways, large infrastructure projects, mining access roads, and continuous grading operations.",
    image: grader3,
  },
];

const MotorGraders = () => {
  return (
    <section className={styles.page}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Motor Graders for Rent</h1>
        <p>
          High-performance motor graders available for precise leveling, road
          construction, and surface finishing across all project scales.
        </p>
      </div>

      {/* Motor Grader Sections */}
      {motorGraders.map((item, index) => (
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
                <li>Experienced Grader Operator</li>
                <li>Ideal for Road & Infrastructure Projects</li>
              </ul>
            </div>

            <button className={styles.cta}>Request Quote</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MotorGraders;
