import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph=()=>{

    // const chartData set chart function set to use stte const[chartData, setChartData] = useState([])
    const[apiValue, setAPIvalue]=useState([]);
    const[apiValue2, setAPIvalue2]=useState([]);


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
            const response= await fetch('https://api.globalgiving.org/api/public/projectservice/campaign/187/projects?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
            const data = await response.json();
            const item=data.projects.project;
            //nb line above - if the content is a sub array 
            setAPIvalue(item);
            //console.log(item);

        }
        loadData();

        async function loadData2(){
            const response= await fetch('https://api.globalgiving.org/api/public/projectservice/campaign/10/projects?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
            const data = await response.json();
            const item=data.projects.project;
            //nb line above - if the content is a sub array 
            setAPIvalue2(item);
            //console.log(item);

        }
        loadData2();
        
        },[]); //use effect


        var funding=[];
        var undefinedData=[];
        var funding2=[];

        for(var j=0; j<apiValue.length; j++){

            while(apiValue[j]===undefined){
                undefinedData.push(apiValue[j]);
                console.log("api not yet loaded")
            }
    
                if(apiValue!==undefined && apiValue!== null){
    
                    for(var i=0;i<6;i++){
                           
                        funding.push(apiValue[i].funding);
                    }
            
                }else{
                    console.log("api not loaded");
                }
            }//j


            for(var j=0; j<apiValue2.length; j++){

                while(apiValue2[j]===undefined){
                    undefinedData.push(apiValue2[j]);
                    console.log("api not yet loaded")
                }
        
                    if(apiValue2!==undefined && apiValue2!== null){
        
                        for(var i=0;i<6;i++){
                               
                            funding2.push(apiValue2[i].funding);
                        }
                
                    }else{
                        console.log("api not loaded");
                    }
                }//j
    

            console.log(funding);
            console.log(funding2);

    const chartData={

            labels:['1','2','3','4','5','6','7'],
            datasets:[{
                label:'Organisation A',
                data:funding2,
                backgroundColor:['rgba(57,196,229,1'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }, {
                label:'Organisation B',
                data:funding,
                backgroundColor:['rgba(255,104,85,1)'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }
        ]

    }

    return(
        <div>
            <Line data={chartData} style={{height:'500px', width:'500px'}} options={{plugins:{legend:{display:false}}}}/>
        </div>
    );
}

export default LineGraph