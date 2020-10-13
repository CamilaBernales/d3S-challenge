import React, { useState, useEffect } from "react";
import Car from "./Car";
import WelcomeText from "./WelcomeText";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

const CarList = () => {
  const [cars, setCars] = useState(
    JSON.parse(localStorage.getItem("cars")) || []
  );
  const deleteCar = (id) => {
    Swal.fire({
      title: "¿Estas seguro de que quieres eliminar este auto?",
      text: "No podrás revertir los cambios luego",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "El auto fue eliminado con éxito", "success");
        setCars(cars.filter((car) => car.id !== id));
      }
    });
  };
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <Container className="my-3 text-center">
      {!cars.length ? (
        <WelcomeText />
      ) : (
        cars.map((car) => <Car key={car.id} car={car} deleteCar={deleteCar} />)
      )}
    </Container>
  );
};

export default CarList;
