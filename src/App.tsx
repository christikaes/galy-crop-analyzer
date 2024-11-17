import { useEffect, useState } from "react";
import "./App.css";
import { RadarChart } from "./RadarChart";
import { Sliders } from "./Sliders";
import { Crop, getData } from "./getData";
import { getColor } from "./getColor";

export interface Slider {
  label: string;
  weight: number;
}

function App() {
  // State in the parent component
  const [sliders, setSliders] = useState<Slider[]>([
    { label: "Technology", weight: 50 },
    { label: "Market", weight: 50 },
    { label: "ESG", weight: 30 },
    { label: "Regulatory", weight: 70 },
  ]);

  const getWeightedTotal = (entry: Crop) => {
    return Math.round(
      ((sliders[0].weight / 100) * entry.technicalScore +
        (sliders[1].weight / 100) * entry.marketScore +
        (sliders[2].weight / 100) * entry.esgScore +
        (sliders[3].weight / 100) * entry.regulatoryScore) /
        4
    );
  };

  const [data, setData] = useState<Array<Crop>>();
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const sortedData = data.sort(
    (a, b) => getWeightedTotal(b) - getWeightedTotal(a)
  );
  const topCrops = sortedData?.slice(0, 5);

  // Update the weight of a specific slider
  const updateWeight = (index: number, newWeight: number): void => {
    const updatedSliders = sliders.map((slider, i) =>
      i === index ? { ...slider, weight: newWeight } : slider
    );
    setSliders(updatedSliders);
  };

  return (
    <>
      <div className="app-bar">
        <h1>Galy Crop Options Analyzer</h1>
      </div>
      <section className="left-sidebar">
        <h3 style={{ textAlign: "left", paddingLeft: 20 }}>All Crops</h3>
        <ol>
          {sortedData.map((d) => (
            <li
              key={d.id}
              style={{
                listStylePosition: "inside",
                borderLeft: "10px solid",
                borderColor: getColor(d.name),
              }}
            >
              {d.name}
              {/* : {getWeightedTotal(d)} */}
            </li>
          ))}
        </ol>
      </section>
      <main className="main-top">
        {/* <div className="centered-container"> */}
        <RadarChart sliders={sliders} crops={topCrops} />
        {/* </div> */}
      </main>
      <section className="main-bottom">
        <h3> Metric Weights</h3>
        <div className="centered-container">
          <Sliders sliders={sliders} updateWeight={updateWeight} />
        </div>
      </section>
      <section className="right-sidebar">
        <h3>Top Crop Candidates</h3>
        {topCrops.map((data) => (
          <div
            style={{
              border: "2px solid",
              margin: "10px",
              borderColor: getColor(data.name),
              padding: 10,
              fontSize: 14,
            }}
          >
            <b>{data.name}</b>
            <ul style={{ margin: 0, marginTop: 5 }}>
              <li style={{ fontWeight: "bold" }}>
                Weighted Score: {getWeightedTotal(data)}
              </li>
              <li>
                Technical Score: {data.technicalScore}
                {data.technicalDescription}
              </li>
              <li>
                Market Score: {data.marketScore} {data.marketDescription}
              </li>
              <li>
                ESG Score: {data.esgScore} {data.esgDescription}
              </li>
              <li>
                Regulatory Score: {data.regulatoryScore}
                {data.regulatoryDescription}
              </li>
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
