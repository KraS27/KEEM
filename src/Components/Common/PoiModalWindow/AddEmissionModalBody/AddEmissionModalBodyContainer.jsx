import React, {useState} from 'react';
import AddEmissionModalBody from "./AddEmissionModalBody";
import {useParams} from "react-router-dom";

const AddEmissionModalBodyContainer = (props) => {
    debugger;
    const urlParams = useParams();
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [valueAvg, setValueAvg] = useState();
    const [valueMax, setValueMax] = useState();
    const [measure, setMeasure] = useState("");
    const [elementName, setElementName] = useState("");
    const [environment, setEnvironment] = useState(urlParams.idEnvironment)

    const addEmission = () => {
        debugger;
        props.toogleMode();
        props.setNewEmissions(
            [
                ...props.newEmissions,
                {
                    day: day,
                    valueAvg: valueAvg,
                    valueMax: valueMax,
                    year: year,
                    month: month,
                    measure: measure,
                    idPoi: props.marker.id,
                    idEnvironment: environment,
                    elementName: elementName
                }
            ]
        );
    }
    return (
        <AddEmissionModalBody
            toogleMode={props.toogleMode}
            show={props.show}
            addEmission={addEmission}
            handleClose={props.handleClose}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            valueAvg={valueAvg}
            setValueAvg={setValueAvg}
            valueMax={valueMax}
            setValueMax={setValueMax}
            measure={measure}
            setMeasure={setMeasure}
            elementName={elementName}
            setElementName={setElementName}
            environment={environment}
            setEnvironment={setEnvironment}
            newEmissions={props.newEmissions}
        />
    );
};

export default AddEmissionModalBodyContainer;
