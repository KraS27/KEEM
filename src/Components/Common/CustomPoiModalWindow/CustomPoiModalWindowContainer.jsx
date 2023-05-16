import React, {useState} from 'react';
import CustomPoiModalWindow from "./CustomPoiModalWindow";

const CustomPoiModalWindowContainer = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CustomPoiModalWindow
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            marker={props.marker}
        />
    );
};

export default CustomPoiModalWindowContainer;