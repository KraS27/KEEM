import React, {useState} from 'react';
import CustomPoiModalWindow from "./CustomPoiModalWindow";

const CustomPoiModalWindowContainer = (props) => {

    debugger;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nameObject, setNameObject] = useState(props.marker.nameObject);
    const [description, setDescription] = useState(props.marker.description);
    const [latitude, setLatitude] = useState(props.marker.latitude);
    const [longitude, setLongitude] = useState(props.marker.longitude);

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