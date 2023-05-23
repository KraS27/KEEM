import React from 'react';
import s from "../PoiModalWindow.module.css";
import {ModalBody, ModalFooter, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DisplayEmissionModalBody = (props) => {

    let mapEmissionToTableRow;
    let mapNewEmissionToTableRow;

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
    if(props.newEmissions != null){
        mapNewEmissionToTableRow = props.newEmissions.map(e =>
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
            <ModalBody>
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
                    {mapNewEmissionToTableRow}
                    </tbody>
                </Table>
            </ModalBody>
           <ModalFooter>
               <Button variant="warning" className={s.addEmissionButton} onClick={props.toogleMode}>
                   Додати забруднення
               </Button>
               <Button variant="secondary" onClick={props.handleClose}>
                   Закрити
               </Button>
               <Button variant="primary" onClick={props.handleClose}>
                   Зберегти зміни
               </Button>
           </ModalFooter>
        </div>
    );
};

export default DisplayEmissionModalBody;