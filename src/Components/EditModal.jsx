import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, Container, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { FaTimes } from "react-icons/fa";

export default function EditModal(props){
    const [name, setName] = useState("");

    return(
        <Container fluid>
            <Modal size= "md" isOpen = {props.isOpen} id = {props.id}>
                <ModalHeader>Edit this sport</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                            <Label for= "name" className= "mr-sm-2">Name</Label>
                            <Input className= "form-control" type= "text" name= "name" id= "name" 
                                value = {props.sport} onChange = ""/>
                        </FormGroup>
                    </Form>
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
