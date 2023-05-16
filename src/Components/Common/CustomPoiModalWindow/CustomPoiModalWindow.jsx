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
                    <MDBInput type="text" ></MDBInput>
                    <p>Розташування: </p>
                    <MDBInput type="text" ></MDBInput>
                    <p>Широта: </p>
                    <MDBInput type="text" ></MDBInput>
                    <p>Довгота: </p>
                    <MDBInput type="text" ></MDBInput>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CustomPoiModalWindow;