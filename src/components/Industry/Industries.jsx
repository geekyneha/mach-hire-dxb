import styles from "./Industries.module.css";
import {
  FiHome,
  FiTruck,
  FiLayers,
  FiSettings,
  FiMap,
  FiActivity,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    { icon: <FiHome />, title: t("industries.construction") },
    { icon: <FiLayers />, title: t("industries.infrastructure") },
    { icon: <FiTruck />, title: t("industries.logistics") },
    { icon: <FiSettings />, title: t("industries.industrial") },
    { icon: <FiMap />, title: t("industries.mining") },
    { icon: <FiActivity />, title: t("industries.oilGas") },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{t("industries.label")}</span>
        <h2>{t("industries.heading")}</h2>
        <p>{t("industries.subtitle")}</p>

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
