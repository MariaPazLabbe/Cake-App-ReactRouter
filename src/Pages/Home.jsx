import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//navbar desarrollado con bootstrap
const Home = ({ brand }) => {
  return (
    <>
      <Container className="text-center">
        <h1 className="pt-5">
          Bienvenido a <span className="fw-bold">Happy Cake</span>
        </h1>
        <h6> El lugar de los pasteles felices </h6>
        <div>
          <img
            width="180px"
            className="cake-imagen my-3"
            src="https://cdn-icons-png.flaticon.com/512/2682/2682340.png"
            alt="Happy Cake"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
