import React, {useState, useEffect} from 'react'
import {Bubble} from 'react-chartjs-2'

const BubbleGraph=()=>{

     // const chartData set chart function set to use stte const[chartData, setChartData] = useState([])
     const[apiValue, setAPIvalue]=useState([]);

     var myHeaders = new Headers();
     myHeaders.append("Accept", "application/json");
     myHeaders.append("Authorization", "Basic MjAwMDgwQHZpcnR1YWx3aW5kb3cuY28uemE6SUoxNTk5YmluZ2luaQ==");
     
     var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     };
 
     useEffect(()=>{
     
         async function loadData(){
             //fetches tghemes
             const response= await fetch('https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
             const data = await response.json();
             const item=data.projects.project;

             //nb line above - if the content is a sub array 
             setAPIvalue(item);
             console.log(item);
         }
         loadData();

         
         },[]); //use effect

         var charityName=[];
         var donations=[];
         var outstanding=[];

         var current=[];
         var need=[];
         var undefinedData=[];

         for(var j=0; j<apiValue.length; j++){

          while(apiValue[j]===undefined){
              undefinedData.push(apiValue[j]);
              console.log("api not yet loaded")
          }
  
              if(apiValue!==undefined && apiValue!== null){

                  charityName.push(apiValue[j].title);
                  donations.push(apiValue[j].numberOfDonations);
                  need.push(apiValue[j].goal);
                  current.push(apiValue[j].funding);
          
              }else{
                  console.log("api not loaded");

              }
          }//j

          for(var i=0; i<need.length;i++){
            outstanding.push(Math.round((current[i]/need[i]) *50));
          }
       
          console.log(outstanding);

    const chartData ={

      type: 'bubble',
      // data: data,
      // options: {}

            datasets:[{

                data: [{
                    x: charityName[1],
                    y: donations[1],
                    r: outstanding[1]
                  }, {
                    x: charityName[2],
                    y: donations[2],
                    r: outstanding[2]
                  }, {
                    x: charityName[3],
                    y: donations[3],
                    r: outstanding[3]
                  }, {
                    x: charityName[4],
                    y: donations[4],
                    r: outstanding[4]
                  }, {
                    x: charityName[5],
                    y: donations[5],
                    r: outstanding[5]
                  }, {
                    x: charityName[6],
                    y: donations[6],
                    r: outstanding[6]
                  }, {
                    x: charityName[7],
                    y: donations[7],
                    r: outstanding[7]
                  }, {
                    x: charityName[8],
                    y: donations[8],
                    r: outstanding[8]
                  }, {
                    x: charityName[9],
                    y: donations[9],
                    r: outstanding[9]
                  }
                ],//data
                backgroundColor:[
                  '#ff6855', 
                '#39c4e5',
                '#363e61',
                '#ff928a',
                '#b0e7f5',
                '#ff6855',
                '#39c4e5',
            ],

                hoverRadius:+6
            }]//datasets

    }


    return(
        <div style={{width:'470px', height:'400px', float:'left'}}>
            <Bubble data={chartData} options={{ 
                          plugins:{ 
                            legend:{display:false, labels:{color:'#ffffff00', boxWidth:0}}
                        },scales:{
                            // yAxis:[{
                            //     //   categoryPercentage: 1.0,
                            //     // barPercentage: 1.0,
                            // }],
                          
                            x:{
                               ticks:{
                                    color:'rgba(0,0,0,0)'
                                },
                                type: 'category',labels: ['']
                            }
                        }, maintainAspectRatio: false,
                
              
              }}  />
        </div>
    );
}

export default BubbleGraph