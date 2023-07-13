import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import classes from "./productChart.module.css";

const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      label: "My First Dataset",
      data: [55, 31, 14],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      hoverOffset: 4,
    },
  ],
};

const ProductChart = () => {

  const [Data, setData] = useState(data);

  return (
    <div className={classes.product}>
      <h2>Top Products</h2>
      <div className={classes.chart}>
        <Pie data={Data} />
      </div>
    </div>
  );
};

export default ProductChart;
