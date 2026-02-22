/*import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import worldGeo from "./data/world.geojson";

const data = [
  { id: "USA", value: 120 },
  { id: "PAK", value: 80 },
  { id: "AUS", value: 60 },
  { id: "GBR", value: 100 },
  { id: "FRA", value: 90 },
];

export default function WorldChoropleth() {
  return (
    <div style={{ height: 500 }}>
      <ResponsiveChoropleth
        data={data}
        features={worldGeo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[0, 150]}
        unknownColor="#eeeeee"
        label="properties.name"
        projectionScale={110}
        projectionTranslation={[0.5, 0.5]}
        borderWidth={0.5}
        borderColor="#152538"
      />
    </div>
  );
}
*/