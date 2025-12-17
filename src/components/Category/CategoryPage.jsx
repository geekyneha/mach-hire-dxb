import { useParams, useNavigate } from "react-router";

const categoryData = {
  excavators: {
    title: "Excavators",
    description:
      "We offer small, medium, and large excavators for construction, demolition, and excavation work.",
  },
  "wheel-loaders": {
    title: "Wheel Loaders",
    description:
      "Powerful wheel loaders suitable for heavy material handling and site work.",
  },
  "dump-trucks": {
    title: "Dump Trucks",
    description:
      "Reliable dump trucks available for daily and long-term rental.",
  },
  "six-wheelers": {
    title: "Six Wheelers",
    description: "Six wheelers designed for efficient transport of materials.",
  },
  "backhoe-loaders": {
    title: "Backhoe Loaders",
    description: "Versatile machines for digging and loading operations.",
  },
  "mobile-cranes": {
    title: "Mobile Cranes",
    description:
      "Mobile cranes with experienced operators for lifting operations.",
  },
  "motor-graders": {
    title: "Motor Graders",
    description: "Motor graders for road leveling and finishing work.",
  },
  forklifts: {
    title: "Forklifts",
    description: "Forklifts for warehouse and industrial material handling.",
  },
  "skid-steers": {
    title: "Skid Steers",
    description: "Compact skid steers for confined construction sites.",
  },
  compactors: {
    title: "Compactors",
    description: "Soil and road compactors for groundwork and finishing.",
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const data = categoryData[category];

  if (!data) {
    return <h2 style={{ padding: "80px" }}>Category not found</h2>;
  }

  return (
    <div style={{ padding: "80px 6%" }}>
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <ul>
        <li>✔ Small / Medium / Large available</li>
        <li>✔ Daily / Weekly / Monthly rental</li>
        <li>✔ Operator available</li>
      </ul>

      <button style={{ marginTop: "24px" }}>Enquire on WhatsApp</button>
    </div>
  );
};

export default CategoryPage;
