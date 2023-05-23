import React, {useState} from 'react';
import AddEmissionModalBody from "./AddEmissionModalBody";

const AddEmissionModalBodyContainer = () => {

    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);
    const [valueAvg, setValueAvg] = useState(null);
    const [valueMax, setValueMax] = useState(null);
    const [measure, setMeasure] = useState(null);
    const [elementName, setElementName] = useState(null);

    return (
        <AddEmissionModalBody />
    );
};

export default AddEmissionModalBodyContainer;