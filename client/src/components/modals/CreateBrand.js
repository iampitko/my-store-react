import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавити новий бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введіть назву бренду"}
                >
                </Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Закрити</Button>
            <Button variant={'outline-success'} onClick={addBrand}>Добавити</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;