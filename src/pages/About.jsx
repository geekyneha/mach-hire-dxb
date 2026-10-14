import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import SEO from "../components/SEO/SEO";

const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <SEO
        title="About UAE Machinery Rentals | Trusted Equipment Rental Company"
        description="Learn about UAE Machinery Rentals, a trusted provider of construction and industrial equipment rentals across the UAE."
        canonical="https://www.uaemachineryrentals.ae/about"
      />

      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <div className={styles.image}></div>
        </div>

        <div className={styles.content}>
          <span className={styles.label}>{t("about.label")}</span>
          <h2>
            {t("about.headingLine1")} <br />
            {t("about.headingLine2")}
          </h2>

          <p>{t("about.intro1")}</p>
          <p>{t("about.intro2")}</p>

          <button className={styles.cta} onClick={handleLearnMore}>
            {showMore ? t("about.showLess") : t("about.learnMore")}
          </button>

          {showMore && (
            <div className={styles.moreContent}>
              <p>
                <strong>{t("about.storyTitle")}</strong> {t("about.story")}
              </p>

              <p>
                <strong>{t("about.missionTitle")}</strong> {t("about.mission")}
              </p>

              <p>
                <strong>{t("about.fleetTitle")}</strong> {t("about.fleet")}
              </p>

              <p>
                <strong>{t("about.safetyTitle")}</strong> {t("about.safety")}
              </p>

              <p>
                <strong>{t("about.approachTitle")}</strong>{" "}
                {t("about.approach")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
