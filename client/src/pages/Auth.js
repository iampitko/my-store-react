import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Вхід" : "Реєстрація"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введіть ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >
                    </Form.Control>

                    <Form.Control
                        className="mt-2"
                        placeholder="Введіть ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    >
                    </Form.Control>

                    <Row>
                        <Button variant={"outline-success"} className="mt-2 align-self-center" onClick={click}>
                            {isLogin ? "Увійти" : "Зареєструватися"}
                        </Button>
                        {isLogin ?
                            <div class="mt-2 text-center">
                                <NavLink to = {REGISTRATION_ROUTE}>Зареєструватися</NavLink>  
                            </div>
                            :
                            <div class="mt-2 text-center">
                                <NavLink to = {LOGIN_ROUTE}>Я вже зареєстрований</NavLink>  
                            </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;