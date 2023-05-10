import React from 'react';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {Button} from "react-bootstrap";
const Login = () => {
    return (
        <form action="">
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Авторизація</h2>
                                <p className="text-white-50 mb-3">Будь ласка, введіть свій логін і пароль!</p>

                                <MDBInput wrapperClass='mb-4 w-100' label='Електронна пошта' id='formControlLg' type='email' size="lg" placeholder={"keem@gmail.com"}/>
                                <MDBInput wrapperClass='mb-4 w-100' label='Пароль' id='formControlLg' type='password' size="lg" placeholder={"keem1256"}/>

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label="Запам'ятати пароль"/>

                                <Button size='lg' type="submit">
                                    Увійти
                                </Button>

                                <hr className="my-4" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    );
};

export default Login;