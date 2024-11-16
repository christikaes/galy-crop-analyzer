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

const applyWeights = (data: number[], sliders: Slider[]) => {
  return data.map((d, i) => (sliders[i].weight / 100) * d);
};

export const RadarChart = ({ sliders }: { sliders: Slider[] }) => {
  const data = {
    labels: ["Market", "ESG", "Regulatory"],
    datasets: [
      {
        label: "Corn",
        data: applyWeights([65, 59, 90], sliders),
        fill: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Apples",
        data: applyWeights([28, 48, 40], sliders),
        fill: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  return <Radar data={data} options={options} />;
};
