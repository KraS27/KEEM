import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from "./PoiModalWindow.module.css"
import DisplayEmissionModalBody from "./DisplayEmissionModalBody";

const MODAL_MODES = {
    DISPLAY_EMISSIONS: 0,
    ADD_EMISSION: 1
};

const PoiModalWindow = (props) => {

    const [mode, setMode] = useState(MODAL_MODES.DISPLAY_EMISSIONS);

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
                    {mode === MODAL_MODES.DISPLAY_EMISSIONS
                        ?
                        <DisplayEmissionModalBody
                            emissions={props.emissions}
                            marker={props.marker}
                        />
                        :
                        <></>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" className={s.addEmissionButton}>
                        Додати забруднення
                    </Button>
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