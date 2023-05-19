import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from "./PoiModalWindow.module.css"
import {Table} from "react-bootstrap";

const PoiModalWindow = (props) => {

    let mapEmissionToTableRow;

    if(props.emissions != null){
        mapEmissionToTableRow = props.emissions.map(e =>
            <tr>
                <td>{e.elementName}</td>
                <td>{e.valueAvg}</td>
                <td>{e.valueMax}</td>
                <td>{e.day}</td>
                <td>{e.month}</td>
                <td>{e.year}</td>
                <td>{e.measure}</td>
            </tr>
        )
    }
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
                    <p className={s.moduleText}>Розташування: {props.marker.description}</p>
                    <p className={s.moduleText}>Тип: {props.marker.typeName}</p>
                    <Table >
                        <thead>
                            <tr>
                                <th>Елемент</th>
                                <th>Ср.кількість</th>
                                <th>Макс.кількість</th>
                                <th>День</th>
                                <th>Місяць</th>
                                <th>Рік</th>
                                <th>О.В.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mapEmissionToTableRow}
                        </tbody>
                    </Table>
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