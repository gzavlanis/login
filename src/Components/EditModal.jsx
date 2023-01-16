import React, {useState, useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, Container, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { FaTimes } from "react-icons/fa";

export default function EditModal({sport, isOpen, isClose, showName}){
    const [name, setName] = useState(sport);
    const handleChange = (e) => {
        setName(e.target.value);
        showName(e.target.value);
    };

    useEffect(() => {
        setName(sport);
    }, [sport]);

    return(
        <Container fluid>
            <Modal size= "md" isOpen = {isOpen}>
                <ModalHeader>Edit {name}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                            <Label for= "name" className= "mr-sm-2">Name</Label>
                            <Input type= "text" name= "name" id= "name" value = {name} onChange = {handleChange}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color = "danger" className= "shadow" onClick= {isClose}>
                        <FaTimes size= {18}/> Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}
