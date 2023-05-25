import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="../logo.png"
            alt="logo"
            style={{ height: "60px", borderRadius: "60%" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-nav-dropdown" className="justify-content-end">
          <Nav>
            <NavLink to="/" className="navbar-nav nav-link">
              Home
            </NavLink>
            <NavLink to="/Services" className="navbar-nav nav-link">
              Services
            </NavLink>
            <NavLink to="Contact" className="navbar-nav nav-link">
              Contact
            </NavLink>
            <NavLink to="About" className="navbar-nav nav-link">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
