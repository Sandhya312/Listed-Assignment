
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import classes from "./Activity.module.css";
import { useState } from "react";


const red = '#E9A0A0';
const green = '#9BDD7C';
const DATA_COUNT = 6;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {

  labels.push( 'Week'+i.toString());
}
const datapoints = [100,400,150,450,180,280];
const datapoints2 = [200,398,200,300,230,480];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Guest',
      data: datapoints2,
      borderColor: red,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'User',
      data: datapoints,
      borderColor:green,
      fill: false,
      tension: 0.4
    }, 
  ],
  
};
const Activity = () => {

  const [Data,setData] = useState(data);

  
  return (
    <div className={classes.activities}>
       <h2>Activities</h2>
      <div className={classes.chart}>
       
      <Line data={Data} />
      </div>
    </div>
  );
};

export default Activity;
