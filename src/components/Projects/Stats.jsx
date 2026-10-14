import { useTranslation } from "react-i18next";
import styles from "./Stats.module.css";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: "20+", label: t("projects.statsYears") },
    { value: "3000+", label: t("projects.statsProjects") },
    { value: "200+", label: t("projects.statsClients") },
    { value: t("projects.allEmirates"), label: t("projects.statsCoverage") },
  ];

  return (
    <section className={styles.heroStats}>
      <div className={styles.content}>
        <span className={styles.tag}>{t("projects.experienceScale")}</span>

        <h1 className={styles.heading}>
          {t("projects.heroTitle1")} <br />
          <span>{t("projects.heroTitle2")}</span>
        </h1>

        <p className={styles.description}>{t("projects.heroText")}</p>

        <div className={styles.statsGrid}>
          {stats.map((item, i) => (
            <div key={i} className={styles.statCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.line} />
      </div>
    </section>
  );
}
