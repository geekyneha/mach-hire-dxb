import styles from "./Testimonial.module.css";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Project Manager, BuildTech",
    feedback:
      "The equipment was delivered on time and performed flawlessly on site. Reliable service and professional team.",
  },
  {
    name: "Rahul Mehta",
    role: "Site Engineer, InfraWorks",
    feedback:
      "Well-maintained machinery and quick support whenever required. Highly recommended for large projects.",
  },
  {
    name: "Mohammed Ali",
    role: "Operations Head, UrbanConstruct",
    feedback:
      "Their wide fleet helped us complete multiple projects without delays. Great experience working with them.",
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
