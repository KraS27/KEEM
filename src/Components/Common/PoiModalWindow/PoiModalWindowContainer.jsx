import React, {useEffect, useState} from 'react';
import PoiModalWindow from "./PoiModalWindow";
import axios from "axios";

export const MODAL_MODES = {
    DISPLAY_EMISSIONS: 0,
    ADD_EMISSION: 1
};
const PoiModalWindowContainer = (props) => {
    debugger;
    const [mode, setMode] = useState(MODAL_MODES.DISPLAY_EMISSIONS);
    const [show, setShow] = useState(false);
    const [emissions, setEmissions] = useState([]);
    const [newEmissions, setNewEmissions] = useState([]);
    const handleClose = () =>{
        if(mode === MODAL_MODES.ADD_EMISSION)
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

    const saveChange = () => {
        debugger;
        if(newEmissions.length != 0){
            axios.post(
                "https://localhost:7199/emissions/range",
                newEmissions,
                {withCredentials : true}
            ).then(response => {
                if(response.data.data === true)
                    setShow(false);
            }).catch(function (error){
                console.log(error);
            })
        }
        else {
            setShow(false);
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
                        saveChange={saveChange}
        />
    );
}

export default PoiModalWindowContainer;