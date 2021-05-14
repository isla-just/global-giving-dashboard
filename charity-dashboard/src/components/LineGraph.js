import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph=()=>{

    const[chartData, setChartData]=useState();

    const chart =()=>{
        setChartData({
            labels:['1','2','3','4','5','6','7'],
            datasets:[{
                label:'Organisation A',
                data:[45, 40, 50, 52, 60, 42, 65],
                backgroundColor:['rgba(57,196,229,1'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }, {
                label:'Organisation B',
                data:[60, 45, 70, 85, 70, 60, 80],
                backgroundColor:['rgba(255,104,85,1)'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }]
        });
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        <div>
            <Line data={chartData} style={{height:'500px', width:'500px'}} options={{plugins:{legend:{display:false}}}}/>
        </div>
    );
}

export default LineGraph