import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PoiModalWindow from "./PoiModalWindow";

const PoiModalWindowContainer = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <PoiModalWindow show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
        />
    );
}

export default PoiModalWindowContainer;