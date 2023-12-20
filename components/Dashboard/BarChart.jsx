"use client";
import React from "react";
// import Chart from "react-apexcharts";
// import dynamic from "next/dynamic";
// const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

function BarChart() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    yaxis: {
      max: 10, // Set the maximum value on the y-axis
      min: 0, // Set the minimum value on the y-axis
    },
    colors: ["#2F855A"],
  };

  const series = [
    {
      name: "Recieved Amount",
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ];
  return (
    <div>
      {/* <ApexCharts options={options} series={series} height={500} type="bar" /> */}
    </div>
  );
}

export default BarChart;
