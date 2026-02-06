import { useNavigate } from "react-router";
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

const categories = [
  {
    name: "Excavators",
    slug: "excavators",
    img: category1,
  },
  {
    name: "Wheel Loaders",
    slug: "wheel-loaders",
    img: category2,
  },
  {
    name: "Dump Trucks",
    slug: "dump-trucks",
    img: category3,
  },
  {
    name: "Six Wheelers",
    slug: "six-wheelers",
    img: category4,
  },
  {
    name: "Backhoe Loaders",
    slug: "backhoe-loaders",
    img: category5,
  },
  {
    name: "Mobile Cranes",
    slug: "mobile-cranes",
    img: category6,
  },
  {
    name: "Motor Graders",
    slug: "motor-graders",
    img: category7,
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    img: category8,
  },
  {
    name: "Bobcats",
    slug: "bobcats",
    img: category9,
  },
  {
    name: "Compactors",
    slug: "compactors",
    img: category10,
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      {/* Brands */}
      <div className={styles.brands}>
        <div className={styles.track}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className={styles.brand}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className={styles.content}>
        <h2>Our Equipment Categories</h2>
        <p>
          At UAE Machinery Rentals, we offer a comprehensive range of heavy
          machinery designed to support construction, infrastructure, and
          large-scale industrial projects throughout the UAE.
        </p>

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
