import styles from "./Careers.module.css";
import SEO from "../components/SEO/SEO";

const WHATSAPP_NUMBER = "971509734271";

/* ================================
   JOB DATA (ALL ON SAME PAGE)
================================ */
const careers = [
  {
    id: "six-wheeler-truck-driver",
    title: "Six-Wheeler Truck Driver",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Operating 6-wheeler trucks (light to heavy), transporting construction materials",
    license: "Valid UAE six-wheeler / truck license",
    active: true,
  },
  {
    id: "backhoe-loader-operator",
    title: "Backhoe Loader Operator",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Excavation, trenching, site preparation using 6–11 ton backhoe loaders",
    license: "UAE operator license required",
    active: true,
  },
  {
    id: "mobile-crane-operator",
    title: "Mobile Crane Operator",
    experience: "2+ years in UAE/Dubai",
    skills: "Operating 10–120 ton mobile cranes, lifting, rigging, site safety",
    license: "UAE crane operator certification required",
    active: true,
  },
  {
    id: "forklift-operator",
    title: "Forklift Operator",
    experience: "1–2 years in UAE/Dubai",
    skills: "Operating 1–16 ton forklifts, loading/unloading materials",
    license: "UAE forklift operator license",
    active: true,
  },
  {
    id: "motor-grader-operator",
    title: "Motor Grader Operator",
    experience: "2+ years in UAE/Dubai",
    skills: "Road leveling, grading, soil compaction using 12–22 ton graders",
    license: "UAE heavy machinery/operator license",
    active: true,
  },
  {
    id: "bobcat-operator",
    title: "Bobcat (Skid Steer Loader) Operator",
    experience: "1–2 years in UAE/Dubai",
    skills: "Operating 2–5 ton Bobcats for landscaping and excavation",
    license: "UAE operator license preferred",
    active: true,
  },
  {
    id: "road-roller-operator",
    title: "Compactor / Road Roller Operator",
    experience: "2+ years in UAE/Dubai",
    skills: "Soil/asphalt compaction using 1–14 ton compactors",
    license: "UAE heavy machinery/operator license",
    active: true,
  },
];

/* ================================
   GOOGLE JOBS SCHEMA GENERATOR
================================ */
const generateJobSchema = (job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  identifier: {
    "@type": "PropertyValue",
    name: "UAE Machinery Rentals",
    value: job.id,
  },
  title: job.title,
  description: `
    <p><strong>Experience:</strong> ${job.experience}</p>
    <p><strong>Skills:</strong> ${job.skills}</p>
    <p><strong>License:</strong> ${job.license}</p>
  `,
  datePosted: "2025-01-01",
  validThrough: "2035-12-31", // 🔥 jobs always open
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "UAE Machinery Rentals",
    sameAs: "https://www.uaemachineryrentals.ae",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
  applyUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello,\n\nI am applying for the role of ${job.title}.`
  )}`,
});

const Careers = () => {
  const handleApply = (job) => {
    const message = `
Hello,

I am applying for the role of *${job.title}*.

Experience: ${job.experience}
Skills: ${job.skills}
License: ${job.license}

Thank you.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const activeJobs = careers.filter((job) => job.active);

  return (
    <section className={styles.careers}>
      <SEO
        title="Careers at UAE Machinery Rentals | Apply for Operator Jobs in UAE"
        description="Apply for operator and driver jobs in UAE. Forklift, crane, truck driver, and heavy equipment operator roles available."
        canonical="https://www.uaemachineryrentals.ae/careers"
      />

      {/* ================================
          GOOGLE JOBS STRUCTURED DATA
      ================================ */}
      {activeJobs.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJobSchema(job)),
          }}
        />
      ))}

      {/* Hero */}
      <div className={styles.hero}>
        <h1>Careers</h1>
        <p>
          Build your career with a trusted construction equipment company in the
          UAE. We value skill, safety, and professionalism.
        </p>
      </div>

      {/* Jobs */}
      <div className={styles.grid}>
        {activeJobs.map((job) => (
          <div key={job.id} className={styles.card}>
            <h3>{job.title}</h3>

            <div className={styles.info}>
              <p>
                <span>Experience</span>
                {job.experience}
              </p>
              <p>
                <span>Skills</span>
                {job.skills}
              </p>
              <p>
                <span>License</span>
                {job.license}
              </p>
            </div>

            <button
              className={styles.applyBtn}
              onClick={() => handleApply(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
