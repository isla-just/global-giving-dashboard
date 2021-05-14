import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'


const BarGraph=()=>{

    const[chartData, setChartData]=useState();
    

    const chart =()=>{
        setChartData({

            labels:[1,2,3,4,5,6],
            //labels:['Afghan Institute of Learning','Creating Hope International','Literacy for a Billion in India!','Center for Inspired Teaching','Platform for Labour Action','Planters of the Home'],
            
            datasets: [
                {
                    label: "Current",
                    backgroundColor: "#39c4e5",
                    data: [59214,60364,3316,12058,55372,75110],
                    barThickness:14,
                    borderRadius:10,
                    borderColor:'white',
                    borderWidth:3
                },
                {
                    label: "Target",
                    backgroundColor: "#ff6855",
                    data: [70000,70000,50000,75000,120000,100000],
                    barThickness:14,
                    borderRadius:10,
                    borderColor:'white',
                    borderWidth:3

                }
            ]
        });//setChartData
    }//chart

    useEffect(()=>{
        chart();
    },[]);

    return(
        <div style={{width:'450px', margin:'auto'}}>
        <Bar data={chartData} options={{indexAxis: 'y', legend:{display:false}}}  />
    </div>
    );
}

export default BarGraph