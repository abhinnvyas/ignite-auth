"use client";
import React from "react";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

function RadialBar({ UsedTxns }) {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [UsedTxns],
    labels: ["Transactions Used"],
    colors: ["#2F855A"],
  };

  return (
    <div className="">
      <ApexCharts options={options} series={options.series} type="radialBar" />
    </div>
  );
}

export default RadialBar;
