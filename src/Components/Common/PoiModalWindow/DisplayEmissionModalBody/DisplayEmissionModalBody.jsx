import React from 'react';
import s from "../PoiModalWindow.module.css";
import {Table} from "react-bootstrap";

const DisplayEmissionModalBody = (props) => {

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
        </div>
    );
};

export default DisplayEmissionModalBody;