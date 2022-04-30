import React from 'react';
import ChartBar from './ChartBar';
import './ChartBar.css'



const Chart = props=>{
    const dataPointsVal = props.dataPoints.map(dataPoint => dataPoint.value) 
    const max = Math.max(...dataPointsVal)
    return(
        <div className="chart">
           {props.dataPoints.map((points,i)=><ChartBar key={i} 
                value={points.value} 
                maxValue={max} 
                label={points.label}/>
                )}
        </div>
    )
}

export default Chart 