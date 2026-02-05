import styles from "./Projects.module.css";
const videos = [
  "https://www.youtube.com/embed/whGjOec_udU",
  "https://www.youtube.com/embed/fuJIuxpt7Hg",
  "https://www.youtube.com/embed/6WejoeugtAk",
  "https://www.youtube.com/embed/M_UpajT_kss",
  "https://www.youtube.com/embed/sCFyO6E9wOA",
];

const stats = [
  { label: "Years of Experience", value: "20+" },
  { label: "Projects Delivered", value: "3000+" },
  { label: "Trusted Clients", value: "200+" },
  { label: "UAE Coverage", value: "All Emirates" },
];

const projects = [
  {
    title: "High-Rise Foundation Excavation",
    location: "Business Bay, Dubai",
    year: "2024",
    details: [
      "Bulk excavation & soil removal",
      "Basement foundation preparation",
      "Rock breaking & disposal",
    ],
  },
  {
    title: "Road & Infrastructure Development",
    location: "Abu Dhabi",
    year: "2023",
    details: [
      "Trenching for utilities",
      "Drainage & pipeline excavation",
      "Backfilling & compaction",
    ],
  },
  {
    title: "Industrial Logistics Facility",
    location: "Jebel Ali, Dubai",
    year: "2022",
    details: [
      "Site clearance",
      "Warehouse foundation excavation",
      "Heavy-duty leveling works",
    ],
  },
];

const clients = [
  "Arabtec Holding",
  "ASGC Construction",
  "Al Naboodah Group",
  "Dutco Construction",
  "Khansaheb",
  "ACC – Arabian Construction",
  "Shapoorji Pallonji",
  "Larsen & Toubro (L&T)",
  "UAE Government Contractors",
];

const industries = [
  "Commercial Construction",
  "Residential Developments",
  "Infrastructure & Roads",
  "Oil & Gas Projects",
  "Industrial Warehousing",
  "Government & Municipal Works",
];

export default function Projects() {
  const whatsappNumber = "971509734271"; // UAE number without + or spaces

  const whatsappMessage = encodeURIComponent(
    `Hello,

I’m interested in discussing excavation and machinery requirements for an upcoming project in the UAE.

Could you please share your availability for a consultation?
Looking forward to your response.

Thank you.`,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Trusted Machinery Excellence <span>Across the UAE</span>
        </h1>
        <p>
          Delivering high-performance excavation solutions for landmark
          construction and infrastructure projects nationwide.
        </p>

        <div className={styles.stats}>
          {stats.map((item, i) => (
            <div key={i}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section className={styles.coverage}>
        <h2>Nationwide Project Execution</h2>
        <p>
          We support projects across Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah,
          Ras Al Khaimah, and Umm Al Quwain with consistent quality, compliance,
          and reliability.
        </p>
      </section>
      <section className={styles.videoSection}>
        <h2>Work in Progress</h2>
        <p>
          Real excavation work across UAE — captured in short, vertical on-site
          videos.
        </p>

        <div className={styles.scrollWrapper}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <iframe
                src={video}
                title={`Project video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
      {/* PROJECTS */}
      <section className={styles.timeline}>
        <h2>Selected Project Experience</h2>

        {projects.map((project, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3>{project.title}</h3>
              <span>
                {project.location} • {project.year}
              </span>
            </div>

            <ul>
              {project.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industries}>
        <h2>Industries We Serve</h2>

        <div className={styles.industryGrid}>
          {industries.map((industry, i) => (
            <div key={i} className={styles.industryCard}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trust}>
        <h2>Compliance, Safety & Reliability</h2>
        <p>
          All projects are executed using certified machinery, licensed
          operators, and safety-first procedures aligned with UAE construction
          and municipality regulations.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let’s Build Your Next Project Together</h2>
        <p>Get in touch to discuss your excavation requirements.</p>
        <button onClick={() => window.open(whatsappLink, "_blank")}>
          Request a Consultation
        </button>
      </section>
    </div>
  );
}
