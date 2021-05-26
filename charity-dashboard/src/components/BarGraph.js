import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'

const BarGraph=()=>{

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
            const response= await fetch('https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
            const data = await response.json();
            const item=data.projects.project;
            //nb line above - if the content is a sub array 
            setAPIvalue(item);

        }
        loadData();
        
        },[]); //use effect

        var currentFunding=[];
        var targetFunding=[];
        var projectName=[];
        var undefinedData=[];


        for(var j=0; j<apiValue.length; j++){

        while(apiValue[j]===undefined){
            undefinedData.push(apiValue[j]);
            console.log("api not yet loaded")
        }

            if(apiValue!==undefined && apiValue!== null){

                for(var i=0;i<6;i++){

                    if (apiValue[i].title==="GlobalGiving Fund"){
                        i++;
                        j++;
                     //outlier in the data
                    }
                       
                    targetFunding.push(apiValue[i].goal);
                    currentFunding.push(apiValue[i].funding);
                    projectName.push(apiValue[i].title);
                }
        
            }else{
                console.log("api not loaded");
            }
        }//j


        const chartData={

            //labels:[1,2,3,4,5,6],
            labels:[projectName[0],projectName[1],projectName[2],projectName[3],projectName[4],projectName[5]],
            
            datasets: [
                {
                    label: "Current",
                    backgroundColor: "#39c4e5",
                    data: [currentFunding[0],currentFunding[1],currentFunding[2],currentFunding[3],currentFunding[4],currentFunding[5]],
                    barThickness:14,
                    borderRadius:10,
                    borderColor:'white',
                    borderWidth:3
                },
                {
                    label: "Target",
                    backgroundColor: "#ff6855",
                    data: [targetFunding[0],targetFunding[1],targetFunding[2],targetFunding[3],targetFunding[4],targetFunding[5]],
                    barThickness:14,
                    borderRadius:10,
                    borderColor:'white',
                    borderWidth:3

                }
            ]
    }//chart

    return(
        <div style={{width:'450px', margin:'auto'}}>
        <Bar data={chartData} options={{indexAxis: 'y', 
        plugins:{ legend:{display:false, labels:{color:'#ffffff00', boxWidth:0}}}}
        }  />
    </div>
    );
}

export default BarGraph