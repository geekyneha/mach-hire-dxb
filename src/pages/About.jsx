import { useState } from "react";
import styles from "./About.module.css";
import SEO from "../components/SEO/SEO";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <SEO
        title="About UAE Machinery Rentals | Trusted Equipment Rental Company"
        description="Learn about UAE Machinery Rentals, a trusted provider of construction and industrial equipment rentals across the UAE."
        canonical="https://uaemachineryrentals.ae/about"
      />

      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <div className={styles.image}></div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.label}>ABOUT US</span>
          <h2>
            Building Trust Through <br />
            Reliable Equipment Rental
          </h2>

          <p>
            We are a heavy machinery rental company committed to supporting
            construction, infrastructure, and industrial projects with
            dependable equipment and professional service.
          </p>

          <p>
            Our focus is on quality, safety, and long-term partnerships —
            ensuring every machine delivered is ready to perform on site.
          </p>

          <button className={styles.cta} onClick={handleLearnMore}>
            {showMore ? "Show Less" : "Learn More"}
          </button>

          {showMore && (
            <div className={styles.moreContent}>
              <p>
                <strong>Our Story:</strong> DAZ Equip started with the goal of
                providing reliable machinery solutions to meet the needs of
                construction projects of all sizes. Over the years, we have
                grown into a trusted partner for contractors, builders, and
                industries.
              </p>

              <p>
                <strong>Mission & Vision:</strong> Our mission is to deliver
                high-quality equipment and services that ensure projects are
                completed safely, on time, and efficiently. Our vision is to be
                recognized as a leading machinery rental company known for
                reliability, professionalism, and innovation.
              </p>

              <p>
                <strong>Fleet & Services:</strong> Our fleet includes
                excavators, dump trucks, wheel loaders, six-wheelers, and more,
                all regularly maintained and available with skilled operators.
                Flexible rental plans are designed to suit the needs of every
                project.
              </p>

              <p>
                <strong>Safety & Maintenance:</strong> Safety is our top
                priority. Every machine undergoes regular inspections and
                maintenance to ensure optimal performance. Operators are trained
                to follow the best industry practices, keeping every project
                safe and efficient.
              </p>

              <p>
                <strong>Our Approach to Customers:</strong> We value long-term
                partnerships and work closely with our clients to provide the
                right equipment and ongoing support for their projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
