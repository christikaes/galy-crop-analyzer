import { useState } from "react";
import "./App.css";
import { RadarChart } from "./RadarChart";
import { Sliders } from "./Sliders";

export interface Slider {
  label: string;
  weight: number;
}

function App() {
  // State in the parent component
  const [sliders, setSliders] = useState<Slider[]>([
    { label: "Market", weight: 50 },
    { label: "ESG", weight: 30 },
    { label: "Regulatory", weight: 70 },
  ]);

  // Update the weight of a specific slider
  const updateWeight = (index: number, newWeight: number): void => {
    const updatedSliders = sliders.map((slider, i) =>
      i === index ? { ...slider, weight: newWeight } : slider
    );
    setSliders(updatedSliders);
  };

  return (
    <>
      <h1>Galy Crop Options Analyzer</h1>
      <div className="centered-container">
        <RadarChart sliders={sliders} />
      </div>
      <div className="centered-container">
        <Sliders sliders={sliders} updateWeight={updateWeight} />
      </div>
    </>
  );
}

export default App;
