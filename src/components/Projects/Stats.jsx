import styles from "./Stats.module.css";

const stats = [
  { value: "20+", label: "Years of Industry Experience" },
  { value: "3000+", label: "Projects Successfully Delivered" },
  { value: "200+", label: "Trusted Clients Across UAE" },
  { value: "All Emirates", label: "UAE Coverage" },
];

export default function Stats() {
  return (
    <section className={styles.heroStats}>
      <div className={styles.content}>
        <span className={styles.tag}>EXPERIENCE & SCALE</span>

        <h1 className={styles.heading}>
          Trusted Machinery <br />
          <span>Execution Across the UAE</span>
        </h1>

        <p className={styles.description}>
          Supporting large-scale construction, infrastructure, and industrial
          developments with reliable machinery, certified operators, and on-time
          project execution.
        </p>

        <div className={styles.statsGrid}>
          {stats.map((item, i) => (
            <div key={i} className={styles.statCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.line} />
      </div>
    </section>
  );
}
