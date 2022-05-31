import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} onClick={() => setTypeVisible(true)} className="mt-2 p-2">Добавити тип товару</Button>
            <Button variant={"outline-dark"} onClick={() => setBrandVisible(true)} className="mt-2 p-2">Добавити бренд товару</Button>
            <Button variant={"outline-dark"} onClick={() => setDeviceVisible(true)} className="mt-2 p-2">Добавити товар</Button>
            <CreateBrand show={brandVisible} onHide = {() => setBrandVisible(false)}></CreateBrand>
            <CreateDevice show={deviceVisible} onHide = {() => setDeviceVisible(false)}></CreateDevice>
            <CreateType show={typeVisible} onHide = {() => setTypeVisible(false)}></CreateType>
        </Container>
    );
}

export default Admin;