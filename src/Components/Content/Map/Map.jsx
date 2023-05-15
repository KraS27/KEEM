import React from 'react';
import {GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";
import s from "./Map.module.css"
import PoiModalWindowContainer from "../../Common/ModalWindow/PoiModalWindowContainer";
import greenMarkerIcon from "../../../static/img/green_marker.png";
import redMarkerIcon from "../../../static/img/red_marker.png";
import grayMarkerIcon from "../../../static/img/gray_marker.png";
import {Button} from "react-bootstrap";


const Map = (props) => {
    const markersMap = props.pois.map(m => <Marker key={m.id}
                                                   position={{lat: m.latitude, lng: m.longitude}}
                                                   onClick = {() => { props.setSelectedMarker(m)}}
                                                   icon={
                                                        {
                                                           url: m.isPolluted === 1 ? redMarkerIcon : m.isPolluted === 0 ? greenMarkerIcon : grayMarkerIcon,
                                                           scaledSize: new window.google.maps.Size(45, 45),
                                                        }
                                                   }
                                            />)
    return (
        <div className={s.mapContainer}>
            <GoogleMap
                mapContainerStyle={props.containerStyle}
                center={props.defaultCenter}
                zoom={10}
                onLoad={props.onLoad}
                onUnmount={props.onUnmount}
                onClick={props.onMapClick}
                options={props.defaultOptions}
            >
                {markersMap}
                {props.selectedMarker && (
                    <InfoWindow position={{lat: props.selectedMarker.latitude, lng: props.selectedMarker.longitude}}
                                onCloseClick={() => { props.setSelectedMarker(null) }}
                                options={{pixelOffset: new window.google.maps.Size(0, -40)}}
                    >
                        <div>
                            <p className={s.textInfo}>Назва точки: {props.selectedMarker.nameObject}</p>
                            <p className={s.textInfo}>Розташування: {props.selectedMarker.description}</p>
                            <p className={s.textInfo}>Тип: {props.selectedMarker.typeName}</p>
                            <PoiModalWindowContainer marker={props.selectedMarker}/>
                        </div>
                    </InfoWindow>
                )}
                <Button className={s.changeModeButton} variant="light">Move</Button>
            </GoogleMap>
        </div>
    )
};

export default Map;