import React, {useState, useEffect} from 'react'
import {Radar} from 'react-chartjs-2'

const RadarGraph=()=>{
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
            //fetches tghemes
            const response= await fetch('https://api.globalgiving.org/api/public/projectservice/themes?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
            const data = await response.json();
            const item=data.themes.theme.id;
            //nb line above - if the content is a sub array 
            setAPIvalue(item);
            console.log(item);
        }
        loadData();

        async function loadData2(){
            const response= await fetch(`https://api.globalgiving.org/api/public/projectservice/themes/`+apiValue+`/projects?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e`,requestOptions);
            const data = await response.json();
            const item=data.themes;
            //nb line above - if the content is a sub array 
            setAPIvalue2(item);
           // console.log(item);
        }
        loadData2();
        
        },[]); //use effect

        var themeName=[];
        var themeCount=[];
        var undefinedData=[];

        for(var j=0; j<apiValue.length; j++){

            while(apiValue[j]===undefined){
                undefinedData.push(apiValue[j]);
                console.log("api not yet loaded")
            }
    
                if(apiValue!==undefined && apiValue!== null){
    
                    for(var i=0;i<6;i++){
    
                        if (apiValue[i].theme.name==="GlobalGiving Fund"){
                            i++;
                            j++;
                         //outlier in the data
                        }
                           
                        // targetFunding.push(apiValue[i].goal);
                        // currentFunding.push(apiValue[i].funding);
                        // projectName.push(apiValue[i].title);
                    }
            
                }else{
                    console.log("api not loaded");
                }
            }//j


    const chartData ={
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
    }


    return(
        
        <div style={{width:'350px', float:'left', marginLeft:'50px', marginTop:'-70px'}}>
            <Radar data={chartData} options={{plugins:{legend:{display:false}}}}  />
        </div>
    );
}

export default RadarGraph