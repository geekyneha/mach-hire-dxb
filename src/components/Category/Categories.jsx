import styles from "./Categories.module.css";

const brands = [
  "CAT",
  "Komatsu",
  "Volvo",
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
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603",
  },
  {
    name: "Wheel Loaders",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    name: "Dump Trucks",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    name: "Bulldozers",
    img: "https://images.unsplash.com/photo-1612102595094-92b4b2f7b8df",
  },
  {
    name: "Backhoe Loaders",
    img: "https://images.unsplash.com/photo-1600699261859-3c09a6b3b09f",
  },
  {
    name: "Cranes",
    img: "https://images.unsplash.com/photo-1596075780750-81249df16d19",
  },
  {
    name: "Motor Graders",
    img: "https://images.unsplash.com/photo-1613921568536-78f1d810dbb6",
  },
  {
    name: "Forklifts",
    img: "https://images.unsplash.com/photo-1596079890687-9dbdbe8f9f8f",
  },
  {
    name: "Skid Steers",
    img: "https://images.unsplash.com/photo-1581091870627-3b45b7f1e1b6",
  },
  {
    name: "Compactors",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
];

const Categories = () => {
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
          We provide a wide range of heavy machinery suitable for construction,
          infrastructure, and industrial projects.
        </p>

        <div className={styles.grid}>
          {categories.map((item) => (
            <div className={styles.card} key={item.name}>
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
