import React from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 50.4311172066137,
    lng: 30.6573808193207
};

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

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
};

export default Map;