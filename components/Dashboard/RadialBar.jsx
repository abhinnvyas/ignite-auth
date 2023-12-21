import React from "react";
import Chart from "react-apexcharts";

function RadialBar({ UsedTxns }) {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [70],
    labels: ["Transactions Used"],
    colors: ["#2F855A"],
  };

  return (
    <div className="">
      <Chart options={options} series={options.series} type="radialBar" />
    </div>
  );
}

export default RadialBar;
