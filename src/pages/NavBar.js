import '../App.css';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';


const NavBar = ({colored}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [color, setColor] = useState('#E85382')

    const change = (getColor) => {
        setColor(getColor)
        colored(getColor)
        // onClose()
    }
    return (
        <>
            <nav className="shadow navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <img className="navbar-brand" src={require('../assets/logo.png')} href="/" />
                    <div className='pokebook1'>
                        <span >Poké</span>
                        <span style={{ 'color': `${color}` }}>book</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className='fa fa-search'></i>
                        </span>
                    </button>
                    <div className='collapse navbar-collapse ' id='navbarText'>
                        <input className='nav-search'></input>
                    </div>
                    <button className="theme" style={{ 'backgroundColor': `${color}`, 'border': '1px solid gray' }} onClick={onOpen} ></button>
                </div>
            </nav>

            <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Choose Theme</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='text-center' style={{ 'backgroundColor': 'rgba(204, 204, 204, 0.39)' }}>
                        <div>
                            <button className="theme" style={{ 'backgroundColor': '#E85382' }} onClick={() => change('#E85382')} ></button>
                            <button className="theme1" style={{ 'backgroundColor': '#53c8e8' }} onClick={() => change('#53c8e8') && colored(color)}></button>
                            <button className="theme2" style={{ 'backgroundColor': '#ebc63d' }} onClick={() => change('#ebc63d')} ></button>
                        </div>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    );
}

export default NavBar;
