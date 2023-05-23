import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from "./PoiModalWindow.module.css"
import DisplayEmissionModalBody from "./DisplayEmissionModalBody/DisplayEmissionModalBody";
import AddEmissionModalBodyContainer from "./AddEmissionModalBody/AddEmissionModalBodyContainer";
import {MODAL_MODES} from "./PoiModalWindowContainer";

const PoiModalWindow = (props) => {
    return (
        <div>
            <Button variant="primary" onClick={props.handleShow}>
                Детальніше
            </Button>

            <Modal show={props.show}
                   onHide={props.handleClose}
                   scrollable
                   size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title className={s.moduleTextHeader}>{props.marker.nameObject}</Modal.Title>
                </Modal.Header>
                    {props.mode === MODAL_MODES.DISPLAY_EMISSIONS
                        ?
                        <DisplayEmissionModalBody
                            emissions={props.emissions}
                            newEmissions={props.newEmissions}
                            marker={props.marker}
                            toogleMode={props.toogleMode}
                            handleClose={props.handleClose}
                        />
                        :
                        <AddEmissionModalBodyContainer
                            toogleMode={props.toogleMode}
                            setNewEmissions={props.setNewEmissions}
                            marker={props.marker}
                            handleClose={props.handleClose}
                        />
                    }
            </Modal>
        </div>
    );
}

export default PoiModalWindow;