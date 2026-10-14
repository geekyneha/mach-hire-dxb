import styles from "./Services.module.css";
import {
  FaTruckMoving,
  FaUserCog,
  FaTools,
  FaClock,
  FaClipboardList,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";

const Services = () => {
  const { t } = useTranslation();

  const serviceCards = [
    {
      icon: <FaTruckMoving />,
      title: t("services.heavyEquipmentRentalTitle"),
      text: t("services.heavyEquipmentRentalText"),
    },
    {
      icon: <FaUserCog />,
      title: t("services.operatorRentalTitle"),
      text: t("services.operatorRentalText"),
    },
    {
      icon: <FaTools />,
      title: t("services.maintenanceTitle"),
      text: t("services.maintenanceText"),
    },
    {
      icon: <FaClock />,
      title: t("services.plansTitle"),
      text: t("services.plansText"),
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <FaClipboardList />,
      title: t("services.assessment"),
      text: t("services.assessmentText"),
    },
    {
      number: "02",
      icon: <FaTruckMoving />,
      title: t("services.delivery"),
      text: t("services.deliveryText"),
    },
    {
      number: "03",
      icon: <FaPhoneAlt />,
      title: t("services.supportStep"),
      text: t("services.supportStepText"),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <SEO
        title="Construction Equipment Rental Services in UAE"
        description="Explore our construction equipment rental services in UAE including excavators, dump trucks, cranes, forklifts, and more."
        canonical="https://www.uaemachineryrentals.ae/services"
      />

      <section className={styles.sectionIntro}>
        <div className={styles.introContent}>
          <span className={styles.kicker}>{t("services.whatWeDo")}</span>
          <h2 className={styles.heading}>
            {t("services.headingLine1")}{" "}
            <span className={styles.accent}>{t("services.headingLine2")}</span>
          </h2>
          <p className={styles.text}>{t("services.description")}</p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>{t("services.coverage")}</strong>
              <span>{t("services.coverageLabel")}</span>
            </div>
            <div className={styles.stat}>
              <strong>{t("services.plans")}</strong>
              <span>{t("services.plansLabel")}</span>
            </div>
            <div className={styles.stat}>
              <strong>{t("services.support")}</strong>
              <span>{t("services.supportLabel")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCards}>
        <div className={styles.cardsWrapper}>
          <span className={styles.kicker}>{t("services.coreOfferings")}</span>
          <h3 className={styles.subHeading}>{t("services.ourKeyServices")}</h3>

          <div className={styles.cardsGrid}>
            {serviceCards.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>

          <p className={styles.helperText}>{t("services.helperText")}</p>
        </div>
      </section>

      <section className={styles.sectionProcess}>
        <div className={styles.processWrapper}>
          <span className={styles.kicker}>{t("services.ourProcess")}</span>
          <h3 className={styles.subHeading}>{t("services.howItWorks")}</h3>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionTrust}>
        <div className={styles.trustContent}>
          <span className={styles.kicker}>{t("services.whyPartner")}</span>
          <h3 className={styles.trustTitle}>{t("services.trustTitle")}</h3>
          <p className={styles.trustText}>{t("services.trustText")}</p>

          <div className={styles.values}>
            <Value text={t("services.value1")} />
            <Value text={t("services.value2")} />
            <Value text={t("services.value3")} />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, text }) => (
  <div className={styles.serviceCard}>
    <div className={styles.icon}>{icon}</div>
    <h4 className={styles.cardTitle}>{title}</h4>
    <p className={styles.cardText}>{text}</p>
  </div>
);

const ProcessStep = ({ number, icon, title, text }) => (
  <div className={styles.processItem}>
    <span className={styles.stepNumber}>{number}</span>
    <div className={styles.icon}>{icon}</div>
    <h4 className={styles.processTitle}>{title}</h4>
    <p className={styles.processText}>{text}</p>
  </div>
);

const Value = ({ text }) => (
  <div className={styles.valueItem}>
    <FaCheckCircle />
    <span>{text}</span>
  </div>
);

export default Services;
