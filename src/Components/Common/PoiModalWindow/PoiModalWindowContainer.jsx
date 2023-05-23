import React, {useEffect, useState} from 'react';
import PoiModalWindow from "./PoiModalWindow";
import axios from "axios";

export const MODAL_MODES = {
    DISPLAY_EMISSIONS: 0,
    ADD_EMISSION: 1
};
const PoiModalWindowContainer = (props) => {

    const [mode, setMode] = useState(MODAL_MODES.DISPLAY_EMISSIONS);
    const [show, setShow] = useState(false);
    const [emissions, setEmissions] = useState([]);
    const [newEmissions, setNewEmissions] = useState([]);

    const handleClose = () =>{
        toogleMode();
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const toogleMode = () => {
        switch (mode){
            case MODAL_MODES.DISPLAY_EMISSIONS:
                setMode(MODAL_MODES.ADD_EMISSION);
                break;
            case MODAL_MODES.ADD_EMISSION:
                setMode(MODAL_MODES.DISPLAY_EMISSIONS);
                break;
            default: setMode(MODAL_MODES.DISPLAY_EMISSIONS);
        }
    }
    useEffect(() => {
        axios.get(`https://localhost:7199/emissions/poi?idPoi=${props.marker.id}`).then(response => {
            setEmissions(response.data.data);
        })
    }, [props.marker.id])

    return (
        <PoiModalWindow show={show}
                        mode={mode}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        toogleMode={toogleMode}
                        emissions={emissions}
                        marker={props.marker}
                        setNewEmissions={setNewEmissions}
                        newEmissions={newEmissions}
        />
    );
}

export default PoiModalWindowContainer;