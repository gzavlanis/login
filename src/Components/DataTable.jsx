import React, {useState} from "react";
import { Table, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import data from "../data.json";

export default function DataTable() {
    const [show, setShow] = useState(false);
    const toggleModal = () => setShow(true);
    const close = () => setShow(false);

    const DisplayData = data.map(
        (info) => {
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td style= {{width: "5%"}}>
                        <Button onClick= {toggleModal} outline color= "secondary" type= "button" title= "Edit" className= "shadow">
                            <FaEdit size= {18}/>
                        </Button>
                    </td>
                </tr>
            );
        }
    );

    return(
        <div style = {{backgroundColor: "lightgrey"}} className= "py-5">
            <EditModal isOpen = {show} isClose = {close} toggle = {toggleModal}/>
            <Container className= "py-4 bg-white rounded shadow-lg">
                <h4 className= "text-center">Sports</h4>
                <Table striped size= "md">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </Table>
                <NavLink to= "/" className= "btn btn-danger shadow">
                    <FaSignOutAlt size= {18}/> Logout
                </NavLink>
            </Container>
        </div>
    );
}