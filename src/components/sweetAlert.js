import Swal from "sweetalert2";

function editedCard() {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: "El auto fue editado con exito.",
    showConfirmButton: false,
    timer: 1500,
  });
}

function addedCard() {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: "El auto fue añadido con exito.",
    showConfirmButton: false,
    timer: 1500,
  });
}
export { addedCard, editedCard };
