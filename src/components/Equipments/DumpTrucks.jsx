import styles from "./Excavators.module.css";
import dump1 from "../../assets/dump1.png";
import dump2 from "../../assets/dump2.png";
import dump3 from "../../assets/dump3.png";
import dump4 from "../../assets/dump4.png";

const dumpTrucks = [
  {
    title: "Light Duty Dump Trucks",
    tons: "6 – 10 Ton Trucks",
    description:
      "Light-duty dump trucks suitable for small construction projects, internal road works, debris removal, and urban job sites.",
    image: dump1,
  },
  {
    title: "Medium Duty Dump Trucks",
    tons: "11 – 16 Ton Trucks",
    description:
      "Versatile dump trucks ideal for medium-scale construction, sand transport, aggregate hauling, and infrastructure projects.",
    image: dump2,
  },
  {
    title: "Heavy Duty Dump Trucks",
    tons: "17 – 25 Ton Trucks",
    description:
      "Powerful dump trucks designed for continuous heavy hauling, large construction sites, and bulk material transportation.",
    image: dump3,
  },
  {
    title: "Extra Heavy Dump Trucks",
    tons: "26 – 40+ Ton Trucks",
    description:
      "High-capacity dump trucks built for major infrastructure projects, quarry works, and long-distance material transportation.",
    image: dump4,
  },
];

const DumpTrucks = () => {
  const handleQuoteClick = (truck) => {
    const message = `Hello, I would like to request a quotation for the ${truck.title} (${truck.tons}, Payload: ${truck.payload}). Please provide rental options and pricing.`;
    const phoneNumber = "971509734271"; // replace with your WhatsApp number including country code
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.page}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Dump Trucks for Rent</h1>
        <p>
          Reliable dump trucks available in multiple payload capacities for safe
          and efficient transportation of construction materials.
        </p>
      </div>

      {/* Dump Truck Sections */}
      {dumpTrucks.map((item, index) => (
        <div
          key={item.title}
          className={`${styles.section} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} />
          </div>

          <div className={styles.content}>
            <h2>{item.title}</h2>

            <div className={styles.specs}>
              <span className={styles.tons}>{item.tons}</span>
              <span className={styles.bucket}>
                Payload Capacity: {item.payload}
              </span>
            </div>

            <p>{item.description}</p>

            <div className={styles.rentBox}>
              <span>Rental Includes:</span>
              <ul>
                <li>Daily / Weekly / Monthly Rental</li>
                <li>Licensed & Experienced Driver</li>
                <li>Suitable for Sand, Soil & Aggregates</li>
              </ul>
            </div>

            <button
              className={styles.cta}
              onClick={() => handleQuoteClick(item)}
            >
              Request Quote
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DumpTrucks;
