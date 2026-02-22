import React from "react";
import * as d3 from "d3"; // full D3 bundle
import { feature } from "topojson-client";

// TopoJSON world data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Customer locations
const customers = [
  { name: "California", coords: [-119.4179, 36.7783] },
  { name: "Melbourne", coords: [144.9631, -37.8136] },
  { name: "Multan", coords: [71.5249, 30.1575] },
  { name: "London", coords: [-0.1276, 51.5074] },
  { name: "Paris", coords: [2.3522, 48.8566] },
  { name: "Berlin", coords: [13.4050, 52.5200] },
  { name: "Beijing", coords: [116.4074, 39.9042] },
  { name: "Tokyo", coords: [139.6917, 35.6895] },
  { name: "Dubai", coords: [55.2708, 25.2048] },
];

export default function WorldMapZoom() {
  const [countries, setCountries] = React.useState([]);
  const svgRef = React.useRef(null);
  const gRef = React.useRef(null);

  React.useEffect(() => {
    fetch(geoUrl)
      .then((res) => res.json())
      .then((topoData) => {
        const geoJson = feature(topoData, topoData.objects.countries);
        setCountries(geoJson.features);
      });
  }, []);

  const width = 1050;
  const height = 400;

  const projection = d3.geoNaturalEarth1().scale(150).translate([width / 2, height / 2]);

  React.useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const zoomBehavior = d3
      .zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        gRef.current.setAttribute("transform", event.transform);
      });

    d3.select(svgRef.current).call(zoomBehavior);
  }, [countries]);

  return (
    <svg ref={svgRef} width={width} height={height} >
      <g ref={gRef}>
        {countries.map((country, i) => {
          const path = d3.geoPath().projection(projection)(country);
          return <path key={i} d={path} fill="#EAEAEC" stroke="#999" strokeWidth={0.5} />;
        })}

        {customers.map((c, i) => {
          const [x, y] = projection(c.coords);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={5} fill="red" stroke="#fff" strokeWidth={1} />
              <text x={x + 7} y={y + 3} fontSize={12}>
                {c.name}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
