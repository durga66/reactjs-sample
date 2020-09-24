import React from 'react'
import {Bar} from 'react-chartjs-2'


export function BarChart(){

  const data={
    labels:[
      'Jan','Feb','Mar','Apr','May'
    ],
    datasets:[
      {
      label:'sales for 2019(M)',
      data:[3,2,2,1,5],
      borderColor:[
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)'
        ],
      backgroundColor:[
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)'
        ],
      
    },
    {
      label:'sales for 2020(M)',
      data:[1,3,2,4,2],
      borderColor:[
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)'

        ],
      backgroundColor:[
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)',
        'rgba(54,162,235,1)'
    ],
         }
  ]
  }
  const options={
    title:{
      display:true,
      text:'Bar Chart'
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
  <div className="chart"><Bar data={data} options={options}/>
  </div></div>
}
export default BarChart