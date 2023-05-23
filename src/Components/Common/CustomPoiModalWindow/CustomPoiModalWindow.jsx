import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {MDBInput} from "mdb-react-ui-kit";

const CustomPoiModalWindow = (props) => {
    return (
        <div>
            <Button variant="primary" onClick={props.handleShow}>
                Детальніше
            </Button>

            <Modal show={props.show}
                   onHide={props.handleClose}
                   size="lg"
            >
                <Modal.Body>
                    <p>Назва точки: </p>
                    <MDBInput type="text" value={props.nameObject} onChange={e => props.setNameObject(e.target.value)}/>
                    <p>Розташування: </p>
                    <MDBInput type="text" value={props.description} onChange={e => props.setDescription(e.target.value)}/>
                    <p>Широта: </p>
                    <MDBInput type="text" value={props.latitude}/>
                    <p>Довгота: </p>
                    <MDBInput type="text" value={props.longitude}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={props.saveChange} type="submit">
                        Зберегти зміни
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CustomPoiModalWindow;