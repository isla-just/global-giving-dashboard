//do simple routing and display this loader for a few seconds while the api data loads
import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const Comparison=()=>{


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
                label:'Afghan Institute of Learning',
                data:funding2,
                backgroundColor:['rgba(57,196,229,1'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }, {
                label:'Climate Action',
                data:funding,
                backgroundColor:['rgba(255,104,85,1)'],
                borderWidth:4,
                fill: true,
                tension: 0.4
            }
        ]

    }


    return(
        <div className="compare">

        <div className='cardrow'>
            <div className="block">
          <div className="smLogo"></div>
          <p>- Compare one organisation to another -</p>

          <form>
              <select id='option1' name='organisation1'>

                  {/* //insery title array */}
              <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>

              <select id='option1' name='organisation1' style={{marginLeft:'73px'}}>

            {/* //insery title array */}
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            </select>
        
          </form>

          <div className="comparebtn">Compare</div>
        </div>
        <div className="block">
            <h1 style={{textAlign:'center'}}>Project Name</h1>
            <h4 style={{textAlign:'center'}}>Organisation</h4>
            <p style={{marginTop:'20px'}}>long term impact</p>
            <p style={{textDecoration:'underline'}}>project link</p>

            <div className="next"></div>
        </div>
        <div className="block">
        <h1 style={{textAlign:'center'}}>Project Name</h1>
            <h4 style={{textAlign:'center'}}>Organisation</h4>
            <p style={{marginTop:'20px'}}>long term impact</p>
            <p style={{textDecoration:'underline'}}>project link</p>

            <div className="next"></div>
        </div>
        </div>
      
      <div className="row2">
         <div className="chartContainer">

             <h1 style={{fontWeight:'bold', textAlign:'center', marginTop:'10px'}}>COMPARISON</h1>

         <div style={{height:'700px', width:'1200px', marginTop:'20px'}}>
            <Line data={chartData}  
            options={{            
            scales:{
                // yAxis:[{
                //     //   categoryPercentage: 1.0,
                //     // barPercentage: 1.0,
                // }],
              
                x:{
                   ticks:{
                        color:'rgba(0,0,0,0)'
                    },
                }
            }, maintainAspectRatio: false,
            }}/>
        </div>

         </div>
      </div>
       
      </div>
    );
}
export default Comparison