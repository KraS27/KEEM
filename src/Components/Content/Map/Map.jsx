import React, {useState} from 'react';
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import s from "./Map.module.css"
import {Button} from "react-bootstrap";

const Map = (props) => {

    const [selectedMarker, setSelectedMarker] = useState(undefined);

    const markersMap = props.pois.map(m => <Marker position={{lat: m.latitude, lng: m.longitude}}
                                                onClick = {() => { setSelectedMarker(m)}}
    />)

    return (
        <div className={s.mapContainer}>
            <GoogleMap
                mapContainerStyle={props.containerStyle}
                center={props.defaultCenter}
                zoom={10}
                onLoad={props.onLoad}
                onUnmount={props.onUnmount}
                options={props.defaultOptions}
            >
                {markersMap}
                {selectedMarker && (
                    <InfoWindow position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}
                                onCloseClick={() => { setSelectedMarker(null) }}
                                options={{pixelOffset: new window.google.maps.Size(0, -40)}}
                    >
                        <div>
                            <p>{selectedMarker.nameObject}</p>
                            <Button>fasfsa</Button>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )
};

export default Map;