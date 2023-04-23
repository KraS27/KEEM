import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css"
const Navigation = () => {
    return (
        <div>
            <Navbar expand="sm" bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link active>
                            <NavLink to={"/"} className={styles.navLink}>Домашня сторінка</NavLink>
                        </Nav.Link>
                        <NavDropdown title="Карта Викидів" id="nav-dropdown">
                            <NavDropdown.Item><NavLink to={"map/1"} className={styles.navLink}>Атмосфера</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"map/2"} className={styles.navLink}>Питнева Вода</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"map/6"} className={styles.navLink}>Поверхневі Води</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to={"map/8"} className={styles.navLink}>Стратосфера</NavLink></NavDropdown.Item>
                            <NavDropdown.Item> </NavDropdown.Item>
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