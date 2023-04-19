import React from 'react';
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import s from "./Map.module.css"
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

const Map = () => {



    const mapRef = React.useRef(undefined);
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const markers = [
        {
            lat: 50.4311172066137,
            lng: 30.6573808193207
        },
        {
            lat: 52.4311172066137,
            lng: 32.6573808193207
        },
        {
            lat: 54.4311172066137,
            lng: 34.6573808193207
        },
        {
            lat: 56.4311172066137,
            lng: 36.6573808193207
        },
    ]

    const markersMap = markers.map(m => <Marker position={m}/>)
    return isLoaded ? (
        <div className={s.mapContainer}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                {markersMap}
            </GoogleMap>
        </div>
    ) : <></>
};

export default Map;