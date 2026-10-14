import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./Categories.module.css";
import category1 from "../../assets/hero.webp";
import category2 from "../../assets/category2.webp";
import category3 from "../../assets/category3.webp";
import category4 from "../../assets/category4.webp";
import category5 from "../../assets/category5.webp";
import category6 from "../../assets/category6.webp";
import category7 from "../../assets/category7.webp";
import category8 from "../../assets/category8.webp";
import category9 from "../../assets/category9.webp";
import category10 from "../../assets/category10.webp";

const brands = [
  "CAT",
  "Komatsu",
  "Volvo",
  "Zoomlion",
  "Hitachi",
  "JCB",
  "Liebherr",
  "Doosan",
  "Hyundai",
  "XCMG",
  "SANY",
];

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = [
    {
      name: t("categories.excavators"),
      slug: "excavators",
      img: category1,
    },
    {
      name: t("categories.wheelLoaders"),
      slug: "wheel-loaders",
      img: category2,
    },
    {
      name: t("categories.dumpTrucks"),
      slug: "dump-trucks",
      img: category3,
    },
    {
      name: t("categories.sixWheelers"),
      slug: "six-wheelers",
      img: category4,
    },
    {
      name: t("categories.backhoeLoaders"),
      slug: "backhoe-loaders",
      img: category5,
    },
    {
      name: t("categories.mobileCranes"),
      slug: "mobile-cranes",
      img: category6,
    },
    {
      name: t("categories.motorGraders"),
      slug: "motor-graders",
      img: category7,
    },
    {
      name: t("categories.forklifts"),
      slug: "forklifts",
      img: category8,
    },
    {
      name: t("categories.bobcats"),
      slug: "bobcats",
      img: category9,
    },
    {
      name: t("categories.compactors"),
      slug: "compactors",
      img: category10,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.brands}>
        <div className={styles.track}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className={styles.brand}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h2>{t("categories.heading")}</h2>
        <p>{t("categories.subtitle")}</p>

        <div className={styles.grid}>
          {categories.map((item) => (
            <div
              key={item.slug}
              className={styles.card}
              onClick={() => navigate(`/equipment/${item.slug}`)}
            >
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
