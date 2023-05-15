import React, {useEffect, useState} from 'react';
import {useJsApiLoader} from "@react-google-maps/api";
import axios from "axios";
import Map from "./Map"
import {useParams} from "react-router-dom";

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
    const [mode, setMode] = useState(MODES.MOVE);
    const urlParams = useParams();
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, []);
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, []);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    });
    useEffect(() => {
        axios.get(`https://localhost:7199/pois?idEnvironment=${urlParams.idEnvironment}`).then(response => {
            setPois(response.data.data);
        })
    },[urlParams]);

    const onMapClick = (location) => {
        if(mode === MODES.SET_MARKER){
            console.log(location.latLng.lng());
            console.log(location.latLng.lat());
        }
    }

    const toogleMode = () => {
        switch (mode){
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
            break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE);
                break;
            default:
                setMode(MODES.MOVE);
        }
    }

    if(isLoaded){
        return(
            <Map onLoad={onLoad}
                 onUnmount={onUnmount}
                 onMapClick={onMapClick}
                 containerStyle={containerStyle}
                 defaultCenter={defaultCenter}
                 defaultOptions={defaultOptions}
                 selectedMarker={selectedMarker}
                 setSelectedMarker={setSelectedMarker}
                 toogleMode={toogleMode}
                 currentMode = {mode}
                 pois={pois}
            />
        )
    }
    else {
        return (<></>)
    }
};

export default MapContainer;
export const MODES = {
    MOVE: 0,
    SET_MARKER: 1
};