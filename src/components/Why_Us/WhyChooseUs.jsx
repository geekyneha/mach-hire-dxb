import styles from "./WhyChooseUs.module.css";
import { FiTruck, FiTool, FiClock, FiShield } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <FiTool />,
      title: t("whyChooseUs.reason1Title"),
      desc: t("whyChooseUs.reason1Desc"),
    },
    {
      icon: <FiClock />,
      title: t("whyChooseUs.reason2Title"),
      desc: t("whyChooseUs.reason2Desc"),
    },
    {
      icon: <FiTruck />,
      title: t("whyChooseUs.reason3Title"),
      desc: t("whyChooseUs.reason3Desc"),
    },
    {
      icon: <FiShield />,
      title: t("whyChooseUs.reason4Title"),
      desc: t("whyChooseUs.reason4Desc"),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{t("whyChooseUs.label")}</span>

        <h2>
          {t("whyChooseUs.headingLine1")} <br />
          {t("whyChooseUs.headingLine2")}
        </h2>

        <p className={styles.subtitle}>{t("whyChooseUs.subtitle")}</p>

        <div className={styles.grid}>
          {reasons.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
