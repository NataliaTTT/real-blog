import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-0">
      <Container
        className="navbar navbar-expand-lg navbar-light px-4 px-lg-5"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/">
          Start Bootstrap
        </Link>
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <ul className="navbar-nav  py-4 py-lg-0">
              <li className="nav-item">
                <Link
                  className=" nav-item nav-link px-lg-3 py-3 py-lg-4"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/post">
                  Sample Post
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
