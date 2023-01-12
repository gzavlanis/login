import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaCheck } from "react-icons/fa";

export default function EditForm({ onSubmit }){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
        return(
            <div>
                <Form onSubmit = {onSubmit}>
                    <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                        <Label for= "id" className= "mr-sm-2">id</Label>
                        <Input className= "form-control" type= "text" name= "id" id= "id" placeholder= "Enter id" 
                            value = {id} onChange = {(e) => setId(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                        <Label for= "name" className= "mr-sm-2">Name</Label>
                        <Input className= "form-control" type= "text" name= "name" id= "name" placeholder= "Enter name" 
                            value = {name} onChange = {(e) => setName(e.target.value)}/>
                    </FormGroup>
                    <Button type= "button" className= "mt-2 btn btn-success shadow mx-2">
                        <FaCheck size= {18}/> Apply
                    </Button>
                </Form>
            </div>
        );
    }
