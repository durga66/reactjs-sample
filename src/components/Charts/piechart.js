import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';



export function PieExample(){
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    const options={
      title:{
        display:true,
        text:'Pie Chart'
      }
    }
    return (
      <div className="app">
  <div className="chart">
        <Pie data={data} options={options}/>
      </div>
      </div>
    );

}

export default PieExample