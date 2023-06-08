import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    useEffect(() =>{

    })
    return ( 
      <Chart
      chartType="LineChart"
      data={[["Date", "Weight"], ['2022-06-06', 167], ['2022-07-07', 170], ['2022-08-19', 172]]}
      width="100%"
      height="400px"
      legendToggle
    />

     );
}
 
export default EntriesChartTracker;