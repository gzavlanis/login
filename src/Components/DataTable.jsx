import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "reactstrap";
import axios from "axios";
import toastr from "toastr";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";

export default function DataTable() {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');
    console.log(token);
    useEffect(() => {
        axios.get(
            "http://main.dev.skill90.io:3456/api/sports",
            {   
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        ).then((response) => {
            console.log(response);
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
            toastr.error('Error in loading data. See console logs.', 'Fail!', {closeButton: true, positionClass: 'toast-top-right'});
        });
    }, []);

    const DisplayData = posts.map(
        (info) => {
            return(
                <tr>
                    <td style= {{widyj: "20%"}}>{info.id}</td>
                    <td style= {{width: "75%"}}>{info.name}</td>
                    <td style= {{width: "5%"}}>
                        <Button outline color= "secondary" type= "button" title= "Edit" className= "shadow">
                            <FaEdit size= {18}/>
                        </Button>
                    </td>
                </tr>
            );
        }
    ); 

    return(
        <div style = {{backgroundColor: "lightgrey"}} className= "py-5">
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
                <NavLink to= "/login" className= "btn btn-danger shadow">
                    <FaSignOutAlt size= {18}/> Logout
                </NavLink>
            </Container>
        </div>
    );
}