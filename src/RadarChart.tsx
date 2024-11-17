import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Slider } from "./App";
import { Crop } from "./getData";
import { getColor } from "./getColor";

// Register required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

export const RadarChart = ({
  sliders,
  crops,
}: {
  sliders: Slider[];
  crops: Crop[];
}) => {
  const applyWeights = (data: number[]) => {
    return data.map((d, i) => (sliders[i].weight / 100) * d);
  };

  const data = {
    labels: ["Technology", "Market", "ESG", "Regulatory"],
    datasets: crops.map((crop) => ({
      label: crop.name,
      data: applyWeights([
        crop.technicalScore,
        crop.marketScore,
        crop.esgScore,
        crop.regulatoryScore,
      ]),
      // fill: false,
      // backgroundColor: "rgba(255, 255, 255, 0.8)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      borderColor: getColor(crop.name),
      pointBackgroundColor: getColor(crop.name),
      pointHoverBorderColor: getColor(crop.name),
    })),
  };

  const options = {
    plugins: {
      // 'legend' now within object 'plugins {}'
      legend: {
        labels: {
          color: "white", // not 'fontColor:' anymore
          // fontSize: 18  // not 'fontSize:' anymore
          font: {
            size: 14, // 'size' now within object 'font {}'
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#434343",
        },
        grid: {
          color: "#434343",
        },
        pointLabels: {
          color: "white",
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};
