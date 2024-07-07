import * as React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import Create from '../components/Create.js';

import '../css/app.css';

import Frodo from '../images/frodo.png';

export default function Header({onCreateClick}) {

    return (

        <Navbar className='w-100 align-items-center'>
                        
            <Navbar.Brand href='#home' className='mb-0 ms-5 fs-6 text-white'>
                
                <img
                    alt=''
                    src={Frodo}
                    width='30'
                    className='d-inline-block align-center'
                />{' '}

                Frodo - alpha build

            </Navbar.Brand>

            <Nav className='ms-auto me-5'>

                <Button type='button' onClick={onCreateClick}>Create</Button>
            
            </Nav>

        </Navbar>

    )

}
