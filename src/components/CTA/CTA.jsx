import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>
          Ready to Rent Reliable <br />
          Heavy Machinery?
        </h2>

        <p>
          Talk to our team today and get the right equipment for your project —
          delivered on time and ready to perform.
        </p>

        <button className={styles.cta}>Request a Quote</button>
      </div>
    </section>
  );
};

export default CTA;
