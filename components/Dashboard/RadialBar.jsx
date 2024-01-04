import React from "react";
import Chart from "react-apexcharts";

function RadialBar({ UsedTxns }) {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [50],
    labels: ["Credits Used"],
    colors: ["#2F855A"],
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
  };

  return (
    <div className="">
      <Chart
        options={options}
        series={options.series}
        height={350}
        type="radialBar"
      />
    </div>
  );
}

export default RadialBar;
