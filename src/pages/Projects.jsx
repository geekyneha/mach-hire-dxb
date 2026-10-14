import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";

const videos = [
  "https://www.youtube.com/embed/whGjOec_udU",
  "https://www.youtube.com/embed/fuJIuxpt7Hg",
  "https://www.youtube.com/embed/6WejoeugtAk",
  "https://www.youtube.com/embed/M_UpajT_kss",
  "https://www.youtube.com/embed/sCFyO6E9wOA",
];

export default function Projects() {
  const { t } = useTranslation();
  const whatsappNumber = "971509734271";

  const stats = [
    { label: t("projects.statsYears"), value: "20+" },
    { label: t("projects.statsProjects"), value: "3000+" },
    { label: t("projects.statsClients"), value: "200+" },
    { label: t("projects.statsCoverage"), value: t("projects.allEmirates") },
  ];

  const projects = [
    {
      title: t("projects.project1Title"),
      location: t("projects.project1Location"),
      year: "2024",
      details: [
        t("projects.project1Detail1"),
        t("projects.project1Detail2"),
        t("projects.project1Detail3"),
      ],
    },
    {
      title: t("projects.project2Title"),
      location: t("projects.project2Location"),
      year: "2023",
      details: [
        t("projects.project2Detail1"),
        t("projects.project2Detail2"),
        t("projects.project2Detail3"),
      ],
    },
    {
      title: t("projects.project3Title"),
      location: t("projects.project3Location"),
      year: "2022",
      details: [
        t("projects.project3Detail1"),
        t("projects.project3Detail2"),
        t("projects.project3Detail3"),
      ],
    },
  ];

  const industries = [
    t("projects.industry1"),
    t("projects.industry2"),
    t("projects.industry3"),
    t("projects.industry4"),
    t("projects.industry5"),
    t("projects.industry6"),
  ];

  const whatsappMessage = encodeURIComponent(t("projects.consultMessage"));

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>
          {t("projects.heroTitle1")} <span>{t("projects.heroTitle2")}</span>
        </h1>
        <p>{t("projects.heroText")}</p>

        <div className={styles.stats}>
          {stats.map((item, i) => (
            <div key={i}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.coverage}>
        <h2>{t("projects.coverageTitle")}</h2>
        <p>{t("projects.coverageText")}</p>
      </section>

      <section className={styles.videoSection}>
        <h2>{t("projects.videosTitle")}</h2>
        <p>{t("projects.videosText")}</p>

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

      <section className={styles.timeline}>
        <h2>{t("projects.selectedProjectsTitle")}</h2>

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

      <section className={styles.industries}>
        <h2>{t("projects.industriesTitle")}</h2>

        <div className={styles.industryGrid}>
          {industries.map((industry, i) => (
            <div key={i} className={styles.industryCard}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.trust}>
        <h2>{t("projects.trustTitle")}</h2>
        <p>{t("projects.trustText")}</p>
      </section>

      <section className={styles.cta}>
        <h2>{t("projects.ctaTitle")}</h2>
        <p>{t("projects.ctaText")}</p>
        <button onClick={() => window.open(whatsappLink, "_blank")}>
          {t("projects.ctaButton")}
        </button>
      </section>
    </div>
  );
}
