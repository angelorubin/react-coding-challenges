import React from "react";
import Nav from "components/nav";
import NavItem from "components/nav/nav-item";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/contacts">Contacts</Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
