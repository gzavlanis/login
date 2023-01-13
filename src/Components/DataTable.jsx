import React, {useState} from "react";
import { Table, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import data from "../data.json";

export default function DataTable() {
    const [show, setShow] = useState(false);
    const [sportName, setSportName] = useState("");
    const toggleModal = () => setShow(true);
    const close = () => setShow(false);

    const handleEditClick = (e) => {
        toggleModal();
        data.map((sport) => {
            if (sport.id === e.target.id){
                setSportName(sport.name);
            }
        });
    }
    return(
        <div style = {{backgroundColor: "lightgrey"}} className= "py-5">
            <EditModal isOpen = {show} toggle = {toggleModal} isClose = {close} sport = {sportName}/>
            <Container className= "py-4 bg-white rounded shadow-lg">
                <h4 className= "text-center">Sports</h4>
                <Table striped size= "md">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((sport) => {
                            return(
                                <tr key = {sport.id}>
                                    <td>{sport.id}</td>
                                    <td>{sport.name}</td>
                                    <td style= {{width: "5%"}}>
                                        <Button onClick= {handleEditClick} outline color= "secondary" type= "button" title= "Edit" className= "shadow" id = {sport.id}>
                                            <FaEdit size= {18}/>
                                        </Button>
                                    </td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </Table>
                <NavLink to= "/" className= "btn btn-danger shadow">
                    <FaSignOutAlt size= {18}/> Logout
                </NavLink>
            </Container>
        </div>
    );
}