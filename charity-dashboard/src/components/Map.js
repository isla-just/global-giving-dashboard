
import React, { useRef, useEffect, useState } from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNsYS1qdXN0IiwiYSI6ImNrbWtqOWw3MjExaDcyd2s1aWZvcm03Nm4ifQ.PSbadTmiR284FgPUCfnB0w';

const MapComponent=()=>{

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
    });
    });

    

    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
        );
}
export default MapComponent
