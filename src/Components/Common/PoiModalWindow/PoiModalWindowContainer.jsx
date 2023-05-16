import React, {useEffect, useState} from 'react';
import PoiModalWindow from "./PoiModalWindow";
import axios from "axios";

const PoiModalWindowContainer = (props) => {

    const [show, setShow] = useState(false);
    const [emissions, setEmissions] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`https://localhost:7199/emissions/poi?idPoi=${props.marker.id}`).then(response => {
            setEmissions(response.data.data);
            console.log("get")
        })
    }, [props.marker.id])

    return (
        <PoiModalWindow show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        emissions={emissions}
                        marker={props.marker}
        />
    );
}

export default PoiModalWindowContainer;