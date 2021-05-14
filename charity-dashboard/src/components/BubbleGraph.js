import React, {useState, useEffect} from 'react'
import {Bubble} from 'react-chartjs-2'

const BubbleGraph=()=>{

    const[chartData, setChartData]=useState();

    const chart =()=>{
        setChartData({
            datasets:[{
                labels:'Animals and wellfare, Child protection',
                data: [{
                    x: 1,
                    y: 183,
                    r: 4
                  }, {
                    x: 3,
                    y: 423,
                    r: 7
                  },{
                    x: 5,
                    y: 9,
                    r: 11
                  },{
                    x: 5,
                    y: 1,
                    r: 5
                  },{
                    x: 10,
                    y: 8,
                    r: 12
                  },{
                    x: 5,
                    y: 7,
                    r: 15
                  },{
                    x: 12,
                    y: 6,
                    r: 5
                  },{
                    x: 5,
                    y: 6,
                    r: 8
                  },{
                    x: 6,
                    y: 8,
                    r: 10
                  },{
                    x: 13,
                    y: 9,
                    r: 2
                  },{
                    x: 15,
                    y: 6,
                    r: 10
                  },{
                    x: 16,
                    y: 4,
                    r: 2
                  },{
                    x: 19,
                    y: 8,
                    r: 3
                  },{
                    x: 18,
                    y: 3,
                    r: 5
                  }
                ],
                backgroundColor:['#FF6CAB', 
                '#FFCF1B',
                '#F00B51',
                '#ffcda5',
                '#ff9482',
                '#ff5b94',
                '#ffa62e',
            ],
                
                borderWidth:4,
                hoverRadius:+6
            }]
        });
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        <div style={{width:'500px', height:'500px', float:'left', marginTop:'80px',marginLeft:'150px'}}>
            <Bubble data={chartData} options={{responsive:true}}  />
        </div>
    );
}

export default BubbleGraph