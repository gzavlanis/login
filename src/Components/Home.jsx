import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

export default function Home(){
    return(
        <Navbar light color= "light">
            <Nav>
                <NavItem>
                    <NavLink to= "/login" className= "btn btn-success shadow">
                        <h4>Sign in</h4>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}