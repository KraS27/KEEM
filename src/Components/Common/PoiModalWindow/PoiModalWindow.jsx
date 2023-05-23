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
                <Modal.Body>
                    {props.mode === MODAL_MODES.DISPLAY_EMISSIONS
                        ?
                        <DisplayEmissionModalBody
                            emissions={props.emissions}
                            marker={props.marker}
                        />
                        :
                        <AddEmissionModalBodyContainer />
                    }
                </Modal.Body>
                <Modal.Footer>
                    {props.mode === MODAL_MODES.DISPLAY_EMISSIONS
                        ?
                        <Button variant="warning" className={s.addEmissionButton} onClick={props.toogleMode}>
                            Додати забруднення
                        </Button>
                        :
                        <Button variant="warning" className={s.addEmissionButton} onClick={props.toogleMode}>
                            Назад
                        </Button>
                    }
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Зберегти зміни
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PoiModalWindow;