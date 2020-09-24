import React from 'react'
import {Line} from 'react-chartjs-2'
import BarChart from './barchart'



export function LineChart(){


  const data={
    labels:[
      'Jan','Feb','Mar','Apr','May'
    ],
    datasets:[
      {
      label:'sales for 2019(M)',
      data:[3,2,2,1,5],
      borderColor:[ 'rgba(54,162,235,1)'],
      backgroundColor:['rgba(54,162,235,1)'],
      pointBackgroundColor:'rgba(54,162,235,1)',
      pointBorderColor:'rgba(54,162,235,1)'
    },
    {
      label:'sales for 2020(M)',
      data:[1,3,2,4,2],
      borderColor:[ 'rgba(153,102,255,1)'],
      backgroundColor:[ 'rgba(153,102,255,1)'],
      pointBackgroundColor: 'rgba(153,102,255,1)',
      pointBorderColor: 'rgba(153,102,255,1)'
    }
  ]
  }
  const options={
    title:{
      display:true,
      text:'Line Chart'
    },
    scales:{
      yAxes:[
        {
          ticks:{
            min: 0,
            max: 6,
            stepSize: 1,
            
          }
        }
      ]
    }
  }
  

  return <div className="app">
    <div className="chart"><Line data={data} options={options} />
    </div></div>
  

}
export default LineChart
