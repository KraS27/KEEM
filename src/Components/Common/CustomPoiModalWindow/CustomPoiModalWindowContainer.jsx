import React, {useState} from 'react';
import CustomPoiModalWindow from "./CustomPoiModalWindow";
import axios from "axios";
import {useParams} from "react-router-dom";

const CustomPoiModalWindowContainer = (props) => {

    debugger;
    const [show, setShow] = useState(false);
    const [nameObject, setNameObject] = useState(props.marker.nameObject);
    const [description, setDescription] = useState(props.marker.description);
    const [latitude, setLatitude] = useState(props.marker.latitude);
    const [longitude, setLongitude] = useState(props.marker.longitude);
    const handleClose = () => {
        axios.post(
        "https://localhost:7199/pois",
        {
                 idOfUser: 2,
                 ownerType: 4,
                 latitude: props.marker.latitude,
                 longitude: props.marker.longitude,
                 description: description,
                 nameObject: nameObject,
                 typeName: "test",
                 isPolluted: -1
             },
            {withCredentials : true}
        ).then(response => {
            debugger;
            if(response.data.data === true)
                setShow(false);
        })


    }
    const handleShow = () => setShow(true);
    const handleSetNameObject = (newNameObject) => {
        setNameObject(newNameObject);
        props.marker.nameObject = nameObject;
    }
    const handleDescription = (newDescription) => {
        setDescription(newDescription);
        props.marker.description = description;
    }
    return (
        <CustomPoiModalWindow
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            marker={props.marker}
            nameObject={nameObject}
            description={description}
            setNameObject={handleSetNameObject}
            setDescription={handleDescription}
            latitude={latitude}
            longitude={longitude}
        />
    );
};

export default CustomPoiModalWindowContainer;