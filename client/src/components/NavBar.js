import React, { useContext } from 'react'
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style = {{color: 'white'}} to = {SHOP_ROUTE}>Pitko Shop</NavLink>
            <Form className="m-auto">
                <Form.Control
                    placeholder="Пошук..."
                >
                </Form.Control>
            </Form>
            {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"}  onClick={() => navigate(ADMIN_ROUTE)}>Адмін панель</Button>
                <Button variant={"outline-light"} className="ml-2" onClick={() => logOut()}>Вийти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
            </Nav>
            }
        </Container>
    </Navbar>
  );
})

export default NavBar;