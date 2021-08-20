import { useState } from 'react';
import ReactMapGL from 'react-map-gl';



function Map() {

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100&",
        latitude: 14.5965788,
        longitude: 120.9445401,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/r4ym0ndq/ckskqf4180ruc17qskb58wug7"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
        >
        </ReactMapGL>
    );
}


export default Map;
