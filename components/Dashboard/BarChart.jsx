import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
);

function BarChart() {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Recieved Amount",
        borderRadius: 30,
        data: [1, 0, 1, 0, 1, 0, 1],
        backgroundColor: "rgba(0,163,81,1)",
        barThickness: 10,
      },
    ],
  };
  const options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
        ],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} height={300} options={options} />
    </div>
  );
}

export default BarChart;
