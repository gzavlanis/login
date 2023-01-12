import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Container, ModalFooter } from "reactstrap";
import EditForm from "./EditForm";
import { FaTimes } from "react-icons/fa";

export default function EditModal(props){
    return(
        <Container fluid>
            <Modal size= "lg" isOpen = {props.isOpen}>
                <ModalHeader>Edit this sport</ModalHeader>
                <ModalBody>
                    <EditForm/>
                </ModalBody>
                <ModalFooter>
                    <Button color = "danger" className= "shadow" onClick= {props.isClose}>
                        <FaTimes size= {18}/> Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}
