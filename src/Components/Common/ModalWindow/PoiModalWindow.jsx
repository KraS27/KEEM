import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PoiModalWindow = (props) => {
    return (
        <div>
            <Button variant="primary" onClick={props.handleShow}>
                Детальніше
            </Button>

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.marker.nameObject}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Розташування: {props.marker.description}</p>
                    <p>Тип: {props.marker.typeName}</p>
                    <table>
                        <tr>
                            <th>Хімічний склад</th>
                            <th>Середня кількість</th>
                            <th>Максимальна кількість</th>
                            <th>Рік</th><th>Місяць</th>
                            <th>День</th>
                            <th>Одиниці вимірювання</th>
                        </tr>
                    </table>
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
}

export default PoiModalWindow;