import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  // Add each datapoints values to an array dataPointsValues which is just an array of numbers. Here 12 months so 12 values
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value); // transform object to number
  // dataPointsValues is still an array so I pull out the elements with the spread operator to add them as a standalone argument
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
