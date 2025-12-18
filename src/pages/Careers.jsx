import styles from "./Careers.module.css";

const WHATSAPP_NUMBER = "971509734271"; // replace with real number

import SEO from "../components/SEO/SEO";

const careers = [
  {
    title: "Six-Wheeler Truck Driver",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Operating 6-wheeler trucks (light to heavy), transporting construction materials",
    license: "Valid UAE six-wheeler / truck license",
  },
  {
    title: "Backhoe Loader Operator",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Excavation, trenching, site preparation using 6–11 ton backhoe loaders",
    license: "UAE operator license required",
  },
  {
    title: "Mobile Crane Operator",
    experience: "2+ years in UAE/Dubai",
    skills: "Operating 10–120 ton mobile cranes, lifting, rigging, site safety",
    license: "UAE crane operator certification required",
  },
  {
    title: "Forklift Operator",
    experience: "1–2 years in UAE/Dubai",
    skills:
      "Operating 1–16 ton forklifts, loading/unloading materials, warehouse & site handling",
    license: "UAE forklift operator license",
  },
  {
    title: "Motor Grader Operator",
    experience: "2+ years in UAE/Dubai",
    skills: "Road leveling, grading, soil compaction using 12–22 ton graders",
    license: "UAE heavy machinery/operator license",
  },
  {
    title: "Bobcat (Skid Steer Loader) Operator",
    experience: "1–2 years in UAE/Dubai",
    skills:
      "Operating 2–5 ton Bobcats for landscaping, excavation, and confined sites",
    license: "UAE operator license preferred",
  },
  {
    title: "Compactor / Road Roller Operator",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Soil/asphalt compaction using 1–14 ton compactors, site leveling, quality checks",
    license: "UAE heavy machinery/operator license",
  },
];

const Careers = () => {
  const handleApply = (job) => {
    const message = `
Hello,

I am applying for the role of *${job.title}*.

Experience: ${job.experience}
Skills: ${job.skills}
License: ${job.license}

Please let me know the next steps.
Thank you.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.careers}>
      <SEO
        title="Careers at UAE Machinery Rentals | Join Our Team"
        description="Explore career opportunities at UAE Machinery Rentals. Apply for equipment operators, technicians, and office roles."
        canonical="https://uaemachineryrentals.ae/careers"
      />

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
        {careers.map((job, index) => (
          <div key={index} className={styles.card}>
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
