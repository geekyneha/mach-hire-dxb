import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Equipments.module.css";
import SEO from "../components/SEO/SEO";

const Equipments = () => {
  const { t } = useTranslation();

  const equipmentList = [
    {
      name: t("equipment.excavators"),
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df3b",
      details: [
        t("equipment.detailsExcavators1"),
        t("equipment.detailsExcavators2"),
        t("equipment.detailsExcavators3"),
        t("equipment.detailsExcavators4"),
      ],
      sizes: t("equipment.sizesExcavators", { returnObjects: true }),
    },
    {
      name: t("equipment.wheelLoaders"),
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603",
      details: [
        t("equipment.detailsWheelLoaders1"),
        t("equipment.detailsWheelLoaders2"),
        t("equipment.detailsWheelLoaders3"),
        t("equipment.detailsWheelLoaders4"),
      ],
      sizes: t("equipment.sizesWheelLoaders", { returnObjects: true }),
    },
    {
      name: t("equipment.dumpTrucks"),
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8f71b2c",
      details: [
        t("equipment.detailsDumpTrucks1"),
        t("equipment.detailsDumpTrucks2"),
        t("equipment.detailsDumpTrucks3"),
        t("equipment.detailsDumpTrucks4"),
      ],
      sizes: t("equipment.sizesDumpTrucks", { returnObjects: true }),
    },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Our Equipment Fleet | UAE Machinery Rentals"
        description="Explore our fleet of excavators, wheel loaders, dump trucks and more. Flexible rental plans across the UAE."
        canonical="https://www.uaemachineryrentals.ae/equipment"
      />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{t("equipment.heroTitle")}</h1>
          <p className={styles.subtitle}>{t("equipment.heroSubtitle")}</p>
        </div>
      </section>

      <section className={styles.list}>
        {equipmentList.map((item, index) => (
          <EquipmentCard
            key={item.name}
            item={item}
            reverse={index % 2 !== 0}
            t={t}
          />
        ))}
      </section>
    </div>
  );
};

export default Equipments;

const EquipmentCard = ({ item, reverse, t }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);

  const message = t("equipment.whatsAppMessage", {
    equipment: item.name,
    selectedSize,
  });

  const whatsappLink = `https://wa.me/971509734271?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.name} />
      </div>

      <div className={styles.content}>
        <h2>{item.name}</h2>

        <ul className={styles.features}>
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className={styles.sizes}>
          <span className={styles.sizeLabel}>
            {t("equipment.availableSizes")}
          </span>

          <div className={styles.sizeList}>
            {item.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`${styles.sizeTag} ${
                  selectedSize === size ? styles.active : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          {t("equipment.requestRental")}
        </a>
      </div>
    </div>
  );
};
