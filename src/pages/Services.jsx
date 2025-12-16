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

const Services = () => {
  return (
    <div className={styles.wrapper}>
      {/* SECTION 1 */}
      <section className={styles.sectionIntro}>
        <div className={styles.introContent}>
          <span className={styles.kicker}>WHAT WE DO</span>
          <h2 className={styles.heading}>
            Complete Equipment Rental{" "}
            <span className={styles.accent}>Services</span>
          </h2>
          <p className={styles.text}>
            We support construction and infrastructure projects with reliable
            machinery, expert guidance, and responsive operational support.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>UAE Wide</strong>
              <span>Service Coverage</span>
            </div>
            <div className={styles.stat}>
              <strong>Flexible</strong>
              <span>Rental Plans</span>
            </div>
            <div className={styles.stat}>
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.sectionCards}>
        <div className={styles.cardsWrapper}>
          <span className={styles.kicker}>CORE OFFERINGS</span>
          <h3 className={styles.subHeading}>Our Key Services</h3>

          <div className={styles.cardsGrid}>
            <ServiceCard
              icon={<FaTruckMoving />}
              title="Heavy Equipment Rental"
              text="A wide fleet of excavators, loaders, and trucks maintained to industry standards."
            />
            <ServiceCard
              icon={<FaUserCog />}
              title="Operator-Included Rentals"
              text="Certified operators ensuring safe and efficient equipment handling."
            />
            <ServiceCard
              icon={<FaTools />}
              title="Maintenance & Support"
              text="Preventive maintenance and rapid technical assistance."
            />
            <ServiceCard
              icon={<FaClock />}
              title="Flexible Rental Plans"
              text="Daily, weekly, and monthly options tailored to project needs."
            />
          </div>

          <p className={styles.helperText}>
            Not sure which equipment fits your project? Our team will guide you.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className={styles.sectionProcess}>
        <div className={styles.processWrapper}>
          <span className={styles.kicker}>OUR PROCESS</span>
          <h3 className={styles.subHeading}>How It Works</h3>

          <div className={styles.processGrid}>
            <ProcessStep
              number="01"
              icon={<FaClipboardList />}
              title="Requirement Assessment"
              text="Understanding site conditions and project scope."
            />
            <ProcessStep
              number="02"
              icon={<FaTruckMoving />}
              title="Delivery & Setup"
              text="Timely delivery and ready-to-operate machinery."
            />
            <ProcessStep
              number="03"
              icon={<FaPhoneAlt />}
              title="Ongoing Support"
              text="Dedicated assistance throughout your rental period."
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className={styles.sectionTrust}>
        <div className={styles.trustContent}>
          <span className={styles.kicker}>WHY PARTNER WITH US</span>
          <h3 className={styles.trustTitle}>Built on Reliability & Trust</h3>
          <p className={styles.trustText}>
            We focus on long-term partnerships by delivering dependable
            equipment, transparent communication, and consistent service
            quality.
          </p>

          <div className={styles.values}>
            <Value text="Well-maintained modern fleet" />
            <Value text="Experienced operational support" />
            <Value text="Responsive customer service" />
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
