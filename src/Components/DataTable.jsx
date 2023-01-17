import React, {useState} from "react";
import { Table, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import EditModal from "./EditModal";
import data from "../data.json";

export default function DataTable() {
    const [show, setShow] = useState(false);
    const [sportName, setSportName] = useState("");
    const [id, setId] = useState(0);
    const toggleModal = () => setShow(true);
    const close = () => setShow(false);
    
    const handleEditClick = (e) => {
        let selectedItem = data.find(sport => sport.id == e.target.id);
        setSportName(selectedItem.name);
        setId(selectedItem.id);
        toggleModal();
    };
    
    const showName = (name) => {
        console.log(name);
        let item = data.find(sport => sport.id == id);
        item.name = name;
    };

    const sort = data.sort((a, b) => (a.id > b.id ? 1 : -1));

    return(
        <div style = {{backgroundColor: "lightgrey"}} className= "py-5">
            <EditModal isOpen = {show} toggle = {toggleModal} isClose = {close} sport = {sportName} showName = {showName}/>
            <Container className= "py-4 bg-white rounded shadow-lg">
                <h4 className= "text-center">Sports</h4>
                <Table striped borderless size= "md">
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { sort.map(sport => (
                            <tr key = {sport.id}>
                                <td>{sport.id}</td>
                                <td>{sport.name}</td>
                                <td style= {{width: "5%"}}>
                                    <Button onClick= {handleEditClick} outline color= "secondary" type= "button" title= "Edit" className= "shadow px-2 py-1" id = {sport.id}>
                                        <i className= "fa fa-edit fa-lg" id = {sport.id}></i>
                                    </Button>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </Table>
                <NavLink to= "/" className= "btn btn-danger shadow">
                    <FaSignOutAlt size= {18}/> Logout
                </NavLink>
            </Container>
        </div>
    );
}