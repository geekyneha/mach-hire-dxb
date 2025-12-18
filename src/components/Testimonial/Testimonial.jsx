import styles from "./Testimonial.module.css";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Project Manager, BuildTech",
    feedback:
      "UAE Machinery Rentals delivered the equipment on schedule, and it performed flawlessly on site. A dependable service backed by a highly professional team.",
  },
  {
    name: "Rahul Mehta",
    role: "Site Engineer, InfraWorks",
    feedback:
      "The machinery was well maintained, and support was prompt whenever required. UAE Machinery Rentals is a reliable partner for large-scale construction projects.",
  },
  {
    name: "Mohammed Ali",
    role: "Operations Head, UrbanConstruct",
    feedback:
      "Their extensive fleet allowed us to execute multiple projects without delays. Working with UAE Machinery Rentals has been a smooth and efficient experience.",
  },
];

const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p className={styles.subtitle}>
          Trusted by contractors, engineers, and project managers across
          industries.
        </p>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div className={styles.card} key={item.name}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>

              <p className={styles.feedback}>"{item.feedback}"</p>

              <div className={styles.client}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
