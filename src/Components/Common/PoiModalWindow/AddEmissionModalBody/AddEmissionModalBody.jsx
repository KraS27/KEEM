import React, {useState} from 'react';
import {MDBInput} from "mdb-react-ui-kit";

const AddEmissionModalBody = () => {

const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");
const [valueAvg, setValueAvg] = useState("");
const [valueMax, setValueMax] = useState("");
const [measure, setMeasure] = useState("");
const [elementName, setElementName] = useState("");

    return (
        <div>
            <p>День: </p>
            <MDBInput type="text" value={day} onChange={e => setDay(e.target.value)}/>
            <p>Місяць: </p>
            <MDBInput type="text" value={month} onChange={e => setMonth(e.target.value)}/>
            <p>Рік: </p>
            <MDBInput type="text" value={year} onChange={e => setYear(e.target.value)}/>
            <p>Середнє значення: </p>
            <MDBInput type="text" value={valueAvg} onChange={e => setValueAvg(e.target.value)}/>
            <p>Максимальне значення: </p>
            <MDBInput type="text" value={valueMax} onChange={e => setValueMax(e.target.value)}/>
            <p>Міра виміру: </p>
            <MDBInput type="text" value={measure} onChange={e => setMeasure(e.target.value)}/>
            <p>Ім'я елементу: </p>
            <MDBInput type="text" value={elementName} onChange={e => setElementName(e.target.value)}/>
        </div>
    );
};

export default AddEmissionModalBody;