import styles from "./Testimonial.module.css";
import { useTranslation } from "react-i18next";
import { FiStar } from "react-icons/fi";

const Testimonial = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: t("testimonial.roles.projectManager"),
      feedback: t("testimonial.feedback1"),
    },
    {
      name: "Rahul Mehta",
      role: t("testimonial.roles.siteEngineer"),
      feedback: t("testimonial.feedback2"),
    },
    {
      name: "Mohammed Ali",
      role: t("testimonial.roles.operationsHead"),
      feedback: t("testimonial.feedback3"),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{t("testimonial.label")}</span>
        <h2>{t("testimonial.heading")}</h2>
        <p className={styles.subtitle}>{t("testimonial.subtitle")}</p>

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
