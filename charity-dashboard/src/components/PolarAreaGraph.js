import React, {useState, useEffect} from 'react'
import {PolarArea} from 'react-chartjs-2'

const PolarAreaGraph=()=>{

    const[chartData, setChartData]=useState();

    const chart =()=>{
        setChartData({
            labels:['A town of 100,000 people reads for a year.','100 villages of 2,000 people each read for a year','200 villages of 2,000 people each read for a year.','Reading for half-a-million people!','Reading for a million people!'],
            datasets:[{
                label:'Literacy for a Billion in India!',
                data:[10,20,40,50,100],
                backgroundColor:['#ff9088', 
                '#39c4e5',
                '#b0e7f5',
                '#59679e',
                '#ff6855'
            ],
                
                borderWidth:2,
                hoverBackgroundColor:'#6ee2f5'
            }]
        });
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        
        <div style={{width:'290px', float:'left', marginLeft:'8px', marginTop:'-10px'}}>
            <PolarArea data={chartData} options={{plugins:{legend:{display:false}}}}  />
        </div>
    );
}

export default PolarAreaGraph