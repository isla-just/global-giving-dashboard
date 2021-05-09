import React, {useState,useEffect} from 'react';

const CharityWidget =() =>{

    const[charity, setCharity]=useState(null);
 
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic MjAwMDgwQHZpcnR1YWx3aW5kb3cuY28uemE6SUoxNTk5YmluZ2luaQ==");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    useEffect(async()=>{
        const response=await fetch('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e', requestOptions)
        
            const data=await response.json();
            const item=data;
            setCharity(item);
            console.log(item);
    },[]);

    return(
        <div className="container-fluid">
        <h1 className="title">- Global giving API -</h1>
        <p className="about">GlobalGiving is a nonprofit that supports other nonprofits by connecting them to donors and companies. Since 2002, we've helped trusted, community-led organizations from <br></br>Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need to make our world a better place.</p>
        
        <div className="cards row">
        <div className='card col-12 col-sm-5 col-md-4 col-lg-4'>
            <div className='contentContainer row'>
                {charity &&  <h1 className='charity'>{charity.projects.project[0].title}</h1>}
                {charity && <h2 className='activity'>Long term goal: {charity.projects.project[0].longTermImpact}</h2>}
                {charity && <h2 className='donations'>Donations: {charity.projects.project[0].numberOfDonations}</h2>}
                {charity&&<h2 className='link'>Project Link: {charity.projects.project[0].projectLink}</h2>}
                {charity&&<h3 className='summary'>Summary: {charity.projects.project[0].summary}</h3>}
            </div>
        </div>
        </div> 
    </div> //container fluid
    );
}

export default CharityWidget