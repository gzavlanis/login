import React from "react";
import { Table, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import data from "../data.json";

export default function DataTable() {
    const data = data.map(
        (info) => {
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                </tr>
            );
        }
    );

    
}