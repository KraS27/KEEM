import React from 'react';
import {MDBInput} from "mdb-react-ui-kit";
import {ModalBody, ModalFooter} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import s from "../PoiModalWindow.module.css";
import Modal from "react-bootstrap/Modal";

const AddEmissionModalBody = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                size="lg"
            >
                <ModalBody>
                    <p>День: </p>
                    <MDBInput type="text" value={props.day} onChange={e => props.setDay(e.target.value)}/>
                    <p>Місяць: </p>
                    <MDBInput type="text" value={props.month} onChange={e => props.setMonth(e.target.value)}/>
                    <p>Рік: </p>
                    <MDBInput type="text" value={props.year} onChange={e => props.setYear(e.target.value)}/>
                    <p>Середнє значення: </p>
                    <MDBInput type="text" value={props.valueAvg} onChange={e => props.setValueAvg(e.target.value)}/>
                    <p>Максимальне значення: </p>
                    <MDBInput type="text" value={props.valueMax} onChange={e => props.setValueMax(e.target.value)}/>
                    <p>Міра виміру: </p>
                    <MDBInput type="text" value={props.measure} onChange={e => props.setMeasure(e.target.value)}/>
                    <p>Ім'я елементу: </p>
                    <MDBInput type="text" value={props.elementName} onChange={e => props.setElementName(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button variant="warning" className={s.addEmissionButton} onClick={props.toogleMode}>
                        Назад
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary"  onClick={props.addEmission}>
                        Додати
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default AddEmissionModalBody;