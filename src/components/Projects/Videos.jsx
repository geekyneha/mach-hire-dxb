import { useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Videos.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
  "https://www.youtube.com/embed/whGjOec_udU",
  "https://www.youtube.com/embed/fuJIuxpt7Hg",
  "https://www.youtube.com/embed/6WejoeugtAk",
  "https://www.youtube.com/embed/M_UpajT_kss",
  "https://www.youtube.com/embed/sCFyO6E9wOA",
];

const Videos = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{t("projects.onSite")}</span>
        <h2>{t("projects.videosTitle")}</h2>
        <p className={styles.subtitle}>{t("projects.videosText")}</p>

        <div className={styles.controls}>
          <button onClick={() => scroll("left")}>
            <FiChevronLeft />
          </button>
          <button onClick={() => scroll("right")}>
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.scrollWrapper} ref={scrollRef}>
          {videos.map((video, index) => (
            <div className={styles.videoCard} key={index}>
              <iframe
                src={video}
                title={`Site video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
