import React from 'react'
import {Doughnut} from 'react-chartjs-2'


export function DoughnutChart(){

  const data={
    labels:[
      'Jan','Feb','Mar','Apr','May'
    ],
    datasets:[
      {
      label:'sales for 2019(M)',
      data:[300,200,200,100,500],
      
      backgroundColor:[
          'rgba(255,99,132,1)',
          'rgba(255,205,86,1)',
          'rgba(54,162,235,1)',
          'rgba(255,159,64,1)',
          'rgba(153,102,255,1)',
        ]
      
    }
  ]
  }
  const options={
    title:{
      display:true,
      text:'Doughnut Chart'
    }
  }
  
  return<div className="app">
  <div className="chart"> <Doughnut data={data} options={options}/>
  </div>
  </div>
}
export default DoughnutChart