import React from 'react';
import {MDBInput} from "mdb-react-ui-kit";

const AddEmissionModalBody = () => {
    return (
        <div>
            <p>День: </p>
            <MDBInput type="text"/>
            <p>Місяць: </p>
            <MDBInput type="text"/>
            <p>Рік: </p>
            <MDBInput type="text"/>
            <p>Середнє значення: </p>
            <MDBInput type="text"/>
            <p>Максимальне значення: </p>
            <MDBInput type="text"/>
            <p>Міра виміру: </p>
            <MDBInput type="text"/>
            <p>Ім'я елементу: </p>
            <MDBInput type="text"/>
        </div>
    );
};

export default AddEmissionModalBody;