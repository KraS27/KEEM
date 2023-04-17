import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div>
            <Navbar expand="sm" bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Домашня сторінка</Nav.Link>
                        <NavDropdown title="Карта Викидів">
                            <NavDropdown.Item href="/air">
                                Повітря
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/radiation">
                                Радіація
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/water">
                                Вода
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="primary">Увійти</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;