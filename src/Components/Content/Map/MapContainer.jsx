import React, {useState} from 'react';
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import axios from "axios";
import Map from "./Map"

const API_KEY = process.env.REACT_APP_API_KEY;
const containerStyle = {
    width: '100%',
    height: '100%'
};
const defaultCenter = {
    lat: 50.4311172066137,
    lng: 30.6573808193207
};
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: true,
}

const MapContainer = () => {

    const mapRef = React.useRef(null);
    const [selectedMarker, setSelectedMarker] = useState(undefined);
    const [pois, setPois] = useState([]);
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, []);
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, []);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    });

    axios.get("https://localhost:7199/pois").then(response => {
        setPois(response.data.data);
    })

    if(isLoaded){
        return(
            <Map onLoad={onLoad}
                 onUnmount={onUnmount}
                 containerStyle={containerStyle}
                 defaultCenter={defaultCenter}
                 defaultOptions={defaultOptions}
                 selectedMarker={selectedMarker}
                 setSelectedMarker={setSelectedMarker}
                 pois={pois}
            />
        )
    }
    else {
        return (<></>)
    }
};

export default MapContainer;