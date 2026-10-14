import { useTranslation } from "react-i18next";
import styles from "./Careers.module.css";
import SEO from "../components/SEO/SEO";

const WHATSAPP_NUMBER = "971509734271";

const careers = [
  {
    id: "Excavator-operator",
    titleKey: "careers.jobs.excavator",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Operating 6–20+ ton excavators, digging, trenching, site preparation",
    license: "UAE heavy machinery/operator license",
    active: true,
  },
  {
    id: "six-wheeler-truck-driver",
    titleKey: "careers.jobs.sixWheeler",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Operating 6-wheeler trucks (light to heavy), transporting construction materials",
    license: "Valid UAE six-wheeler / truck license",
    active: true,
  },
  {
    id: "backhoe-loader-operator",
    titleKey: "careers.jobs.backhoe",
    experience: "2+ years in UAE/Dubai",
    skills:
      "Excavation, trenching, site preparation using 6–11 ton backhoe loaders",
    license: "UAE operator license required",
    active: true,
  },
  {
    id: "mobile-crane-operator",
    titleKey: "careers.jobs.crane",
    experience: "2+ years in UAE/Dubai",
    skills: "Operating 10–120 ton mobile cranes, lifting, rigging, site safety",
    license: "UAE crane operator certification required",
    active: true,
  },
  {
    id: "forklift-operator",
    titleKey: "careers.jobs.forklift",
    experience: "1–2 years in UAE/Dubai",
    skills: "Operating 1–16 ton forklifts, loading/unloading materials",
    license: "UAE forklift operator license",
    active: true,
  },
  {
    id: "motor-grader-operator",
    titleKey: "careers.jobs.grader",
    experience: "2+ years in UAE/Dubai",
    skills: "Road leveling, grading, soil compaction using 12–22 ton graders",
    license: "UAE heavy machinery/operator license",
    active: true,
  },
  {
    id: "bobcat-operator",
    titleKey: "careers.jobs.bobcat",
    experience: "1–2 years in UAE/Dubai",
    skills: "Operating 2–5 ton Bobcats for landscaping and excavation",
    license: "UAE operator license preferred",
    active: true,
  },
  {
    id: "road-roller-operator",
    titleKey: "careers.jobs.roller",
    experience: "2+ years in UAE/Dubai",
    skills: "Soil/asphalt compaction using 1–14 ton compactors",
    license: "UAE heavy machinery/operator license",
    active: true,
  },
];

const generateJobSchema = (job, t) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  identifier: {
    "@type": "PropertyValue",
    name: "UAE Machinery Rentals",
    value: job.id,
  },
  title: t(job.titleKey),
  description: `
    <p><strong>${t("careers.experience")}:</strong> ${job.experience}</p>
    <p><strong>${t("careers.skills")}:</strong> ${job.skills}</p>
    <p><strong>${t("careers.license")}:</strong> ${job.license}</p>
    <p><strong>Salary:</strong> AED 2800-3000 per month + benefits</p>
    <p><strong>Benefits:</strong> Accommodation, pick and drop off services, visa provided</p>
  `,
  datePosted: "2025-01-01",
  validThrough: "2035-12-31",
  employmentType: "FULL_TIME",
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "AED",
    value: {
      "@type": "QuantitativeValue",
      minValue: 2800,
      maxValue: 3000,
      unitText: "MONTH",
    },
  },
  hiringOrganization: {
    "@type": "Organization",
    name: "UAE Machinery Rentals",
    sameAs: "https://www.uaemachineryrentals.ae",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Warqa",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  jobBenefits: "Accommodation, pick and drop off services, visa provided",
  applyUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello,\n\nI am applying for the role of ${t(job.titleKey)}.`,
  )}`,
});

const Careers = () => {
  const { t } = useTranslation();

  const handleApply = (job) => {
    const message = `
Hello,

I am applying for the role of *${t(job.titleKey)}*.

Experience: ${job.experience}
Skills: ${job.skills}
License: ${job.license}

Thank you.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
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

      {activeJobs.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJobSchema(job, t)),
          }}
        />
      ))}

      <div className={styles.hero}>
        <h1>{t("careers.heroTitle")}</h1>
        <p>{t("careers.heroText")}</p>
      </div>

      <div className={styles.grid}>
        {activeJobs.map((job) => (
          <div key={job.id} className={styles.card}>
            <h3>{t(job.titleKey)}</h3>

            <div className={styles.info}>
              <p>
                <span>{t("careers.experience")}</span>
                {job.experience}
              </p>
              <p>
                <span>{t("careers.skills")}</span>
                {job.skills}
              </p>
              <p>
                <span>{t("careers.license")}</span>
                {job.license}
              </p>
            </div>

            <button
              className={styles.applyBtn}
              onClick={() => handleApply(job)}
            >
              {t("careers.applyNow")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
