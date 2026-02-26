import { Helmet } from "react-helmet-async";
//SEO component to manage meta tags for better search engine optimization and social media sharing. It accepts title, description, and canonical URL as props to dynamically set the page's metadata.
const SEO = ({ title, description, canonical }) => {
  return (
    <Helmet>
      {/* Title  */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open  */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
