import * as React from 'react';

import {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../css/app.css';

export default function Create({handleClose, handleSubmit}) {

    return (

        <Modal show={true} onHide={handleClose}>

            <Modal.Header closeButton>

                <Modal.Title>Modal Heading</Modal.Title>

            </Modal.Header>

            <Modal.Body>

                Your're reading this text in a Modal

            </Modal.Body>

            <Modal.Footer>

                <Button variant='secondary' onClick={handleClose}>Close</Button>

                <Button variant='primary' onClick={handleSubmit}>Submit</Button>

            </Modal.Footer>

        </Modal>

    )

}
