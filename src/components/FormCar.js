import React, { useState } from "react";
import image from "../images/add_car_image.svg";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { addedCard, editedCard } from "./sweetAlert";
const FormCar = (props) => {
  let id = props.location.id;
  const [car, setCar] = useState({
    id: uuidv4(),
    marca: "",
    modelo: "",
    color: "",
    patente: "",
  });
  const [datosLs, setDatosLs] = useState(
    JSON.parse(localStorage.getItem("cars")) || []
  );
  const { marca, modelo, color, patente } = car;
  const [error, setError] = useState(false);

  const validations = () => {
    if (!modelo || !marca || !color || !patente) {
      setError(true);
      return null;
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 1300);
  };

  const onChangeForm = (e) => {
    setError(false);
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const addCar = (e) => {
    e.preventDefault();
    validations();
    if (!error) {
      setDatosLs([...datosLs, car]);
      e.target.reset();
      addedCard();
    }
  };

  const fetchCar = () => {
    let fetchedCar = datosLs.find((car) => car.id === id);
    setCar(fetchedCar);
  };
  const updateCar = (e) => {
    e.preventDefault();
    validations();
    if (!error) {
      setDatosLs([...datosLs.filter((posts) => posts.id !== car.id), car]);
      editedCard();
    }
  };
  useEffect(() => {
    if (id) return fetchCar();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(datosLs));
  }, [datosLs]);

  return (
    <Container className="my-3">
      {error ? (
        <Alert className="text-center" variant="danger">
          Todos los campos deben estar completos
        </Alert>
      ) : null}
      <Row className="px-5 d-flex justify-content-center align-items-center ">
        <Col sm={12} md={8} xl={6} lg={8} className=" mx-3 my-3">
          <img src={image} className="img-fluid" alt="imagen login" />
        </Col>
        <Col sm={12} lg={6} md={8} xl={5}>
          <Form onSubmit={!id ? addCar : updateCar} className="form p-4">
            <h3 className="text-center mb-3 pb-2">
              {!id ? "Agrege un auto" : "Editar auto"}
            </h3>
            <Form.Group>
              <Form.Label className=" d-flex justify-content-start">
                Marca:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la marca del auto"
                className="rounded-left"
                name="marca"
                defaultValue={!id ? "" : marca}
                maxLength="10"
                onChange={onChangeForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className=" d-flex justify-content-start">
                Modelo:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el modelo del auto"
                className="rounded-left"
                name="modelo"
                defaultValue={!id ? "" : modelo}
                maxLength="10"
                onChange={onChangeForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className=" d-flex justify-content-start">
                Patente:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la patente del auto"
                className="rounded-left"
                name="patente"
                defaultValue={!id ? "" : patente}
                maxLength="8"
                onChange={onChangeForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className=" d-flex justify-content-start">
                Color:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el color del auto"
                className="rounded-left"
                name="color"
                defaultValue={!id ? "" : color}
                maxLength="10"
                onChange={onChangeForm}
              />
            </Form.Group>
            <Row>
              <Col className="justify-content-center mb-3">
                <Button
                  className="text-white btn my-2 btn-button w-100 btn-alta btn"
                  type="submit"
                  variant="dark"
                  disabled={error === true}
                >
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormCar;
