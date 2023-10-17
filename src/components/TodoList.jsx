/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import Swal from "sweetalert2";

const TodoList = ({ movimientos, setMovimientos, setEdit, filtro, valueSearch, setOpen }) => {
  const deleteTodo = ({ id }) => {
    Swal.fire({
      title: "Seguro que quieres eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setMovimientos(movimientos.filter((todo) => todo.id !== id));
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Se ha borrado con exito",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const dataFilter = {
    todos: movimientos,
    gastos: movimientos.filter((mov) => mov.tipo === "gasto"),
    ingresos: movimientos.filter((mov) => mov.tipo === "ingreso"),
  };

  const data = dataFilter[filtro].filter((item) => item.nombre.includes(valueSearch));
  return data.map((todo) => (
    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} setEdit={setEdit} setOpen={setOpen} />
  ));
};

export default TodoList;
