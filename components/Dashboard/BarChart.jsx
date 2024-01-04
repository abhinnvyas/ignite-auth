import React from "react";
import Chart from "react-apexcharts";

function BarChart({ WeeklyAnalysis }) {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      // categories: [
      //   "Monday",
      //   "Tuesday",
      //   "Wednesday",
      //   "Thursday",
      //   "Friday",
      //   "Saturday",
      //   "Sunday",
      // ],
      categories: WeeklyAnalysis.map((item) => item.day),
    },

    yaxis: {
      max: 100, // Set the maximum value on the y-axis
      min: 0, // Set the minimum value on the y-axis
    },
    colors: ["#2F855A"],
  };

  const series = [
    {
      name: "OTP Sent",
      // data: [1, 2, 3, 4, 5, 6, 7],
      data: WeeklyAnalysis.map((item) => item.otpSent),
    },
  ];
  return (
    <div>
      <Chart options={options} series={series} height={500} type="bar" />
    </div>
  );
}

export default BarChart;
