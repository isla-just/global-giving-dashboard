import React, {useState, useEffect} from 'react'
import {Radar} from 'react-chartjs-2'

const RadarGraph=()=>{

    const[chartData, setChartData]=useState();

    const chart =()=>{
        setChartData({
            labels:['Animal Welfare','Child Protection','Climate Action','Peace and Reconciliation', 'Disaster Response','Economic Growth','Education'],

            datasets: [
                {
                    label: "Active projects",
                    backgroundColor: "rgba(57,196,229,0.5)",
                    borderColor: "rgb(57,196,229)",
                    data: [120,100,80,50,130,150,100],
                    borderWidth:3,
                    tension:0.2
                },
                {
                    label: "Completed projects",
                    backgroundColor: "rgba(255,104,85,0.5)",
                    borderColor: "rgb(255,104,85)",
                    data: [150,90,100,120,90,120,90],
                    borderWidth:3,
                    tension:0.2
                }
            ]
        });
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        
        <div style={{width:'350px', float:'left', marginLeft:'50px', marginTop:'-70px'}}>
            <Radar data={chartData} options={{plugins:{legend:{display:false}}}}  />
        </div>
    );
}

export default RadarGraph