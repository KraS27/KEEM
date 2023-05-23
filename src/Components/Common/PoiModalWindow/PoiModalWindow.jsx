import React from 'react';
import Button from 'react-bootstrap/Button';
import DisplayEmissionModalBody from "./DisplayEmissionModalBody/DisplayEmissionModalBody";
import AddEmissionModalBodyContainer from "./AddEmissionModalBody/AddEmissionModalBodyContainer";
import {MODAL_MODES} from "./PoiModalWindowContainer";

const PoiModalWindow = (props) => {
    return (
        <div>
            <Button variant="primary" onClick={props.handleShow}>
                Детальніше
            </Button>
            {props.mode === MODAL_MODES.DISPLAY_EMISSIONS
                ?
                <DisplayEmissionModalBody
                    show={props.show}
                    emissions={props.emissions}
                    newEmissions={props.newEmissions}
                    marker={props.marker}
                    toogleMode={props.toogleMode}
                    handleClose={props.handleClose}
                    saveChange={props.saveChange}
                />
                :
                <AddEmissionModalBodyContainer
                    toogleMode={props.toogleMode}
                    newEmissions={props.newEmissions}
                    setNewEmissions={props.setNewEmissions}
                    marker={props.marker}
                    handleClose={props.handleClose}
                    show={props.show}
                />
            }
        </div>
    );
}

export default PoiModalWindow;