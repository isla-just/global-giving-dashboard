
import React, { useRef, useEffect, useState } from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNsYS1qdXN0IiwiYSI6ImNrbWtqOWw3MjExaDcyd2s1aWZvcm03Nm4ifQ.PSbadTmiR284FgPUCfnB0w';

const MapComponent=()=>{

    const[apiValue, setAPIvalue]=useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic MjAwMDgwQHZpcnR1YWx3aW5kb3cuY28uemE6SUoxNTk5YmluZ2luaQ==");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once
    
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/isla-just/ckoo9alww0pm817qkgs2kgz71',
    center: [lng, lat],
    zoom: 0
    });//new map

    async function loadData(){
        const response= await fetch('https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=f2121684-e111-4cf0-ae00-bd0424a1a75e',requestOptions);
        const data = await response.json();
        const item=data.projects.project;
        //nb line above - if the content is a sub array 
        setAPIvalue(item);
        console.log(item);
    }
    loadData();
    
    },[]);

    

    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
        );
}
export default MapComponent
