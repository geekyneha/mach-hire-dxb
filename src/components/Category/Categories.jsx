import { useNavigate } from "react-router";
import styles from "./Categories.module.css";

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
    img: "https://s3.envato.com/files/275113768/02_preview2.jpg",
  },
  {
    name: "Wheel Loaders",
    slug: "wheel-loaders",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3WD_XI9cUXOOak-t9uDHBJlvV0tZbvnWqA&s",
  },
  {
    name: "Dump Trucks",
    slug: "dump-trucks",
    img: "https://medha.com/wp-content/uploads/2024/09/26c-40t-Dump-truck-scaled-e1726044880768.jpg",
  },
  {
    name: "Six Wheelers",
    slug: "six-wheelers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9ox3uXiXoapFYMeCQvJKnlxDFs36nxRfzg&s",
  },
  {
    name: "Backhoe Loaders",
    slug: "backhoe-loaders",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOihISixlT_FM8LB66JJGUBD0SudAvpeyVw&s",
  },
  {
    name: "Mobile Cranes",
    slug: "mobile-cranes",
    img: "https://constrofacilitator.com/wp-content/uploads/2022/07/mobile-crane-img.jpg.webp",
  },
  {
    name: "Motor Graders",
    slug: "motor-graders",
    img: "https://www.my-equipment.com/blog/wp-content/uploads/2020/03/1b55103d279b6d5c633f6458157a54f3.jpg",
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhDo_v85vm0wS4x3oXkPe_qAGSv2Zbr5_og&s",
  },
  {
    name: "Bobcats/Skid Steers",
    slug: "bobcats/skid-steers",
    img: "https://www.jcb.com/globalassets/digizuite/68216-sv-155-thumbnail/Img_800x800",
  },
  {
    name: "Compactors",
    slug: "compactors",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Caterpillar_825G_Soil_Compactor.jpg/500px-Caterpillar_825G_Soil_Compactor.jpg",
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
          We provide a wide range of heavy machinery suitable for construction,
          infrastructure, and industrial projects.
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
