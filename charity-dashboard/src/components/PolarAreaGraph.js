import React, {useState, useEffect} from 'react'
import {PolarArea} from 'react-chartjs-2'

const PolarAreaGraph=()=>{

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
            const item=data.projects.project[8].donationOptions.donationOption;
            //nb line above - if the content is a sub array 
            setAPIvalue(item);
            console.log(item);

        }
        loadData();
        
        },[]); //use effect

        var amountNeeded=[];
        var amountLabel=[];
        var undefinedData=[];

        for(var j=0; j<apiValue.length; j++){

            while(apiValue[j]===undefined){
                undefinedData.push(apiValue[j]);
                console.log("api not yet loaded")
            }
    
                if(apiValue!==undefined && apiValue!== null){
    
                    for(var i=0;i<8;i++){
    
                        amountNeeded.push(apiValue[i].amount);
                        amountLabel.push(apiValue[i].description);
    
                    }
            
                }else{
                    console.log("api not loaded");
                }
            }//j

        const chartData={
            labels:[amountLabel[0],amountLabel[1],amountLabel[2],amountLabel[3],amountLabel[4],amountLabel[5],amountLabel[6],amountLabel[7]],
            datasets:[{
                label:'Literacy for a Billion in India!',
                data:[amountNeeded[0],amountNeeded[1],amountNeeded[2],amountNeeded[3],amountNeeded[4],amountNeeded[5],amountNeeded[6],amountNeeded[7]],
                backgroundColor:['#ff9088', 
                '#39c4e5',
                '#b0e7f5',
                '#59679e',
                '#ff6855'
            ],
                
                borderWidth:2,
                hoverBackgroundColor:'#6ee2f5'
            }]
    }

    return(
        
        <div style={{width:'290px', float:'left', marginLeft:'8px', marginTop:'-10px'}}>
            <PolarArea data={chartData} options={{plugins:{legend:{display:false}}}}  />
        </div>
    );
}

export default PolarAreaGraph