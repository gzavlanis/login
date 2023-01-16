import React, {useState} from "react";
import { Table, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import EditModal from "./EditModal";
import data from "../data.json";

export default function DataTable() {
    const [show, setShow] = useState(false);
    const [sportName, setSportName] = useState("");
    const toggleModal = () => setShow(true);
    const close = () => setShow(false);
    const [sort, setSort] = useState(0);
    const [sport, setSport] = useState({
        id: '', name: ''
    });
    
    const handleEditClick = (e) => {
        let selectedItem = data.find(sport => sport.id == e.target.id);
        setSportName(selectedItem.name);
        toggleModal();
    };
    
    const showName = (name) => {
        console.log(name);
        data[7].name = name;
    };

    const sortFunction = () => {
        data.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
            return 0;
        });
        setSort(sort + 1);
    };

    return(
        <div style = {{backgroundColor: "lightgrey"}} className= "py-5">
            <EditModal isOpen = {show} toggle = {toggleModal} isClose = {close} sport = {sportName} showName = {showName}/>
            <Container className= "py-4 bg-white rounded shadow-lg">
                <h4 className= "text-center">Sports</h4>
                <Table striped borderless size= "md">
                    <thead>
                        <tr>
                            <th>
                                id&nbsp;&nbsp;
                                <Button size = "sm" outline color = "secondary" className= "shadow py-1" type= "button" title= "Sort by ID" onClick= {sortFunction}>
                                    <i className= "fa fa-sort fa-lg"></i>
                                </Button>
                            </th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(sport => (
                            <tr key = {sport.id}>
                                <td>{sport.id}</td>
                                <td>{sport.name}</td>
                                <td style= {{width: "5%"}}>
                                    <Button onClick= {handleEditClick} outline color= "secondary" type= "button" title= "Edit" className= "shadow px-2 py-2" id = {sport.id}>
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