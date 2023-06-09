import React, {useEffect, useState} from 'react';
import s from "./Login.module.css"
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
import axios from "axios";

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const onLoginClick = () => {
        axios.post(`https://localhost:7199/login?userName=${userName}&password=${password}`,{},{withCredentials : true})
            .then(response => {
                props.setIsLoggedIn(response.data.data);

                if(response.data.data === false)
                    setIsLoginFailed(true)
                else
                    window.location.replace('/');
            });
    }

    return (
        <form action="">
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Авторизація</h2>
                                <p className="text-white-50 mb-3">Будь ласка, введіть свій логін і пароль!</p>

                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label="Ім'я користувача"
                                    type='email'
                                    size="lg"
                                    placeholder={"keem1256"}
                                    onChange={e => setUserName(e.target.value)}
                                    value={userName}
                                />
                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='Пароль'
                                    type='password'
                                    size="lg"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                />

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4'
                                             label="Запам'ятати пароль"/>

                                <Button onClick={onLoginClick} size='lg'>
                                    Увійти
                                </Button>

                                <hr className="my-4"/>
                                {isLoginFailed ?
                                    <p className={s.loginFailed}>Невірний пароль чи ім'я користувача</p>
                                    :
                                    <p></p>
                                }
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    );
};

export default Login;