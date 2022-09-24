import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            📒 Contacto
          </Link>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand> Happy Cake 🍰 </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
