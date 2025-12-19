import { useParams, useNavigate } from "react-router";
import SEO from "../SEO/SEO";
import StructuredData from "../SEO/StructuredData";

// Specific equipment components (rendered for matching category slugs)
import Excavators from "../Equipments/Excavators";
import WheelLoaders from "../Equipments/WheelLoaders";
import DumpTrucks from "../Equipments/DumpTrucks";
import SixWheelers from "../Equipments/SixWheelers";
import BackhoeLoaders from "../Equipments/BackhoeLoaders";
import MobileCranes from "../Equipments/MobileCranes";
import MotorGraders from "../Equipments/MotorGraders";
import Forklifts from "../Equipments/Forklifts";
import Bobcats from "../Equipments/Bobcats";
import Compactor from "../Equipments/Compactor";

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
  bobcats: {
    title: "Bobcats",
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

  if (!data) return <h2 style={{ padding: "80px" }}>Category not found</h2>;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.title} Rental Services in UAE`,
    description: data.description,
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: data.title,
        description: data.description,
        brand: { "@type": "Brand", name: "UAE Machinery Rentals" },
        offers: {
          "@type": "Offer",
          url: `https://www.uaemachineryrentals.ae/equipment/${category}`,
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
        },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
      },
    ],
  };

  return (
    <div style={{ padding: "80px 6%" }}>
      {/* Dynamic SEO */}
      <SEO
        title={`${data.title} for Rent in UAE | UAE Machinery Rentals`}
        description={data.description}
        canonical={`https://www.uaemachineryrentals.ae/equipment/${category}`}
      />

      <StructuredData data={structuredData} />
      <button onClick={() => navigate(-1)}>← Back</button>

      {/* If a specific equipment component exists for this category, render it; otherwise show generic content */}
      {(() => {
        const componentMap = {
          excavators: Excavators,
          "wheel-loaders": WheelLoaders,
          "dump-trucks": DumpTrucks,
          "six-wheelers": SixWheelers,
          "backhoe-loaders": BackhoeLoaders,
          "mobile-cranes": MobileCranes,
          "motor-graders": MotorGraders,
          forklifts: Forklifts,
          bobcats: Bobcats,
          compactors: Compactor,
        };

        const Specific = componentMap[category];
        if (Specific) return <Specific />;

        return (
          <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <ul>
              <li>✔ Small / Medium / Large available</li>
              <li>✔ Daily / Weekly / Monthly rental</li>
              <li>✔ Operator available</li>
            </ul>

            <button style={{ marginTop: "24px" }}>Enquire on WhatsApp</button>
          </>
        );
      })()}
    </div>
  );
};

export default CategoryPage;
