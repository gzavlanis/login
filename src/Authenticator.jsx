import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import Joi from "joi";
import toastr from "toastr";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props){
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        username: Joi.string().min(6).max(20).required(),
        password: Joi.string().min(8).max(20).required(),
    });

    const handleSave = (event) => {
        const { name, value }= event.target;
        let userData = {...user};
        userData[name] = value;
        setUser(userData);
    };

    const validateForm = (event) => {
        event.preventDefault();
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const result = schema.validate(user, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
            axios.post("http://main.dev.skill90.io:3456/api/users/auth", {
                username: username.value,
                password: password.value,
            }).then((response) => {
                console.log(response);
                toastr.success('Login was successful.', 'Success!', {closeButton: true, positionClass: 'toast-top-right'});
            }).catch((error) => {
                console.log(error);
                toastr.error('Wrong username and/or password.', 'Error!', {closeButton: true, positionClass: 'toast-top-right'});
            });
        } else {
            const errorData = {};
            for (let item of error.details) {
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            console.log(errors);
            setErrors(errorData);
            toastr.error(JSON.stringify(errorData), 'Error!', {closeButton: true, positionClass: 'toast-top-right'});
            return errorData;
        }
    };

    return(
        <div style = {{backgroundColor: "lightgrey", height: "100vh"}} className= "py-5">
            <Container className= "py-4 bg-white rounded shadow-lg">
                <h3 className= "text-center">Sign in</h3>
                <Form>
                    <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                        <Label for= "username" className= "mr-sm-2">Username</Label>
                        <Input className= "form-control" type= "text" name= "username" id= "username" placeholder= "Enter username" 
                            value = {user.username} onChange = {handleSave}/>
                    </FormGroup>
                    <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                        <Label for= "password" className= "mr-sm-2">Password</Label>
                        <Input className= "form-control" type= "password" name= "password" id= "password" placeholder= "Enter password" 
                            value = {user.password} onChange = {handleSave}/>
                    </FormGroup>
                    <Button type= "button" className= "mt-2 btn btn-success shadow-lg mx-2" onClick= {validateForm}>Sign in</Button>
                </Form>
                <div className= "pt-3 text-center">
                    <span title= "Reset password">
                        Forgot <Link to= "/">Password</Link> ?
                    </span>
                </div>
            </Container>
        </div>
    );
}
