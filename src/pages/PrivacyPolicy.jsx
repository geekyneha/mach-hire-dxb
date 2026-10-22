import styles from "./PrivacyPolicy.module.css";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information", title: "2. Information We Collect" },
  { id: "collection", title: "3. How We Collect Information" },
  { id: "use", title: "4. How We Use Your Information" },
  { id: "sharing", title: "5. Sharing of Information" },
  { id: "retention", title: "6. Data Retention and Security" },
  { id: "cookies", title: "7. Cookies and Advertising" },
  { id: "rights", title: "8. Your Privacy Rights" },
  { id: "third-parties", title: "9. Third-Party Websites" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Privacy Policy</span>
          </nav>

          <span className={styles.eyebrow}>LEGAL &amp; PRIVACY</span>

          <h1>Privacy Policy</h1>

          <p className={styles.heroDescription}>
            Your privacy matters to us. Learn how we collect, use, protect, and
            manage your information when you explore our website or enquire
            about our services.
          </p>

          <div className={styles.updated}>
            <span className={styles.updatedIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3.5"
                  y="5"
                  width="17"
                  height="15.5"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M7.5 3.5V7M16.5 3.5V7M3.5 9.5H20.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Last updated: 22 October 2026</span>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.toc}>
            <h2>On this page</h2>
            <nav aria-label="Privacy policy sections">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.sidebarNote}>
            <div className={styles.noteIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L20 6V11.5C20 16.5 16.6 20 12 21C7.4 20 4 16.5 4 11.5V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Your information</h3>
            <p>
              We aim to handle your information responsibly when you contact us
              about machinery rentals.
            </p>
            <a href="#contact">Contact us about privacy</a>
          </div>
        </aside>

        <article className={styles.content}>
          <div className={styles.introCard}>
            <h2>Our commitment to your privacy</h2>
            <p>
              MOHD DANIYAL CONSTRUCTION EQUIPMENT &amp; MACHINERY RENTALS L.L.C
              respects your privacy. This policy explains our practices
              concerning personal information collected through our website,
              communications, and service enquiries.
            </p>
          </div>

          <section id="introduction" className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              In this Privacy Policy, &quot;we,&quot; &quot;our,&quot; and
              &quot;us&quot; refer to MOHD DANIYAL CONSTRUCTION EQUIPMENT &amp;
              MACHINERY RENTALS L.L.C, operating through UAE Machinery Rentals
              at{" "}
              <a href="https://www.uaemachineryrentals.ae/">
                www.uaemachineryrentals.ae
              </a>
              .
            </p>
            <p>
              This policy applies to visitors to our website and individuals who
              contact us, submit a quotation request, or enquire about our
              construction equipment and machinery rental services across the
              United Arab Emirates.
            </p>
          </section>

          <section id="information" className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>
              Depending on how you interact with us, we may collect the
              following categories of information:
            </p>

            <h3>Contact information</h3>
            <ul>
              <li>Your name.</li>
              <li>Phone number and email address.</li>
              <li>Other contact details you choose to provide.</li>
            </ul>

            <h3>Enquiry and project information</h3>
            <ul>
              <li>The type of machinery or equipment you require.</li>
              <li>Project location and rental requirements.</li>
              <li>Requested rental duration and quotation details.</li>
              <li>
                Information included in messages, forms, or other communications
                you send us.
              </li>
            </ul>

            <h3>Technical information</h3>
            <p>
              Depending on the technologies used on our website, we may collect
              technical information such as browser type, device information,
              pages visited, and website usage data.
            </p>
          </section>

          <section id="collection" className={styles.section}>
            <h2>3. How We Collect Information</h2>
            <p>We may collect information when you:</p>
            <ul>
              <li>Complete a contact or enquiry form on our website.</li>
              <li>Submit a lead form through Google Ads.</li>
              <li>Call, email, or message our business.</li>
              <li>
                Browse our website where applicable technical tools collect
                usage information.
              </li>
            </ul>
            <p>
              When you submit a Google-hosted lead form, the information you
              provide may be shared with us through Google's lead form services,
              subject to the applicable settings and terms.
            </p>
          </section>

          <section id="use" className={styles.section}>
            <h2>4. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul>
              <li>Respond to enquiries and quotation requests.</li>
              <li>
                Discuss equipment availability, pricing, and project
                requirements.
              </li>
              <li>
                Coordinate machinery rental arrangements and related customer
                communications.
              </li>
              <li>Maintain business and customer records.</li>
              <li>Operate, secure, and improve our website and services.</li>
              <li>Meet applicable legal and regulatory obligations.</li>
            </ul>
            <p>
              We process personal information only where we have an applicable
              legal basis and use it in accordance with applicable law.
            </p>
          </section>

          <section id="sharing" className={styles.section}>
            <h2>5. Sharing of Information</h2>
            <p>
              We may disclose relevant information in the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> To providers supporting our
                website, communications, lead management, or business
                operations.
              </li>
              <li>
                <strong>Legal requirements:</strong> Where disclosure is
                required by law or a lawful request from an authorised
                authority.
              </li>
              <li>
                <strong>Business protection:</strong> Where reasonably necessary
                to protect our rights, security, or legitimate business
                interests.
              </li>
            </ul>
            <p>
              We do not sell personal information to third parties. We do not
              share it with third parties for their independent marketing
              purposes unless appropriately disclosed and permitted by law.
            </p>
          </section>

          <section id="retention" className={styles.section}>
            <h2>6. Data Retention and Security</h2>
            <p>
              We retain personal information for as long as reasonably necessary
              for the purposes described in this policy, including responding to
              enquiries, maintaining relevant business records, resolving
              disputes, and meeting legal obligations.
            </p>
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss,
              misuse, alteration, or disclosure.
            </p>
            <p>
              No method of electronic transmission or storage is completely
              secure. Accordingly, we cannot guarantee absolute security.
            </p>
          </section>

          <section id="cookies" className={styles.section}>
            <h2>7. Cookies and Advertising</h2>
            <p>
              Our website may use cookies or similar technologies to support
              website functionality, understand website usage, or measure
              advertising performance, depending on the tools enabled.
            </p>
            <p>
              If Google Ads or other third-party analytics and advertising
              services are used, those providers may process certain information
              in accordance with their own policies and settings.
            </p>
            <p>
              Where required by applicable law, we will obtain consent before
              using non-essential cookies or similar technologies.
            </p>
            <p>
              You can review Google's privacy information at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </a>
              .
            </p>
          </section>

          <section id="rights" className={styles.section}>
            <h2>8. Your Privacy Rights</h2>
            <p>
              Depending on applicable law, you may have the right to request
              access to your personal information, request corrections, request
              deletion, or exercise other rights relating to how your
              information is processed.
            </p>
            <p>
              You may contact us to make a privacy-related request. We may need
              to verify your identity before responding and may retain certain
              information where legally required or permitted.
            </p>
            <p>
              We will handle requests in accordance with applicable legal
              requirements.
            </p>
          </section>

          <section id="third-parties" className={styles.section}>
            <h2>9. Third-Party Websites</h2>
            <p>
              Our website may contain links to external websites or services.
              These third parties operate independently and may have their own
              privacy policies. We encourage you to review their policies before
              providing personal information.
            </p>
          </section>

          <section id="children" className={styles.section}>
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are intended for business and professional machinery
              rental enquiries. Our website is not designed to solicit personal
              information from children. If you believe a child has provided
              personal information to us, please contact us so we can review the
              matter.
            </p>
          </section>

          <section id="changes" className={styles.section}>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, services, or legal requirements. The
              latest version will be published on this page with its revised
              update date.
            </p>
          </section>

          <section id="contact" className={styles.contactSection}>
            <span className={styles.eyebrow}>WE'RE HERE TO HELP</span>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to make a
              request concerning your personal information, contact our team.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Business</span>
                <strong>
                  MOHD DANIYAL CONSTRUCTION EQUIPMENT &amp; MACHINERY RENTALS
                  L.L.C
                </strong>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Website</span>
                <a href="https://www.uaemachineryrentals.ae/">
                  www.uaemachineryrentals.ae
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:info@machineryrentals.ae">
                  info@machineryrentals.ae
                </a>
              </div>
            </div>

            <a className={styles.contactButton} href="/">
              Return to Homepage
              <span aria-hidden="true">→</span>
            </a>
          </section>

          <div className={styles.footerNote}>
            <span aria-hidden="true">©</span> {new Date().getFullYear()} UAE
            Machinery Rentals. All rights reserved.
          </div>
        </article>
      </div>
    </main>
  );
}
