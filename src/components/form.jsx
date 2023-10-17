/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./form-styles.css";
import uuid4 from "uuid4";
import Swal from "sweetalert2";

import { Button } from "@mui/material";

const initialState = {
  tipo: "gasto",
  nombre: "",
  cantidad: 0,
};

export const Form = ({ movimientos, setMovimientos, edit, setEdit, saldoFinal, setSaldoFinal, setOpen }) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editTodo(edit);
    } else {
      if (values.cantidad > 0) {
        console.log(values);
        if (values.tipo === "gasto") {
          if (saldoFinal - values.cantidad < 0) {
            return Swal.fire({
              icon: "error",
              title: "Error...",
              text: "No cuentas con saldo suficiente para realizar este movimiento",
            });
          }
          setSaldoFinal(saldoFinal - values.cantidad);
        } else {
          setSaldoFinal(saldoFinal + Number(values.cantidad));
        }
        const newTodo = {
          id: uuid4(),
          ...values,
        };

        setMovimientos([...movimientos, newTodo]);
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Registro exitoso `,
          text: `el ${values.tipo} se ha agregado con éxito`,
          showConfirmButton: false,
          timer: 2000,
        });
        setValues(initialState);
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          text: "Solo se permiten valores mayores a cero",
          showConfirmButton: true,
        });
      }
    }
    setOpen(false);
  };

  const editTodo = (todo) => {
    const newMovimientos = movimientos.map((item) => {
      const saldoAnterior = item.cantidad;
      setSaldoFinal(saldoFinal - saldoAnterior + Number(values.cantidad));

      return item.id === todo.id ? { ...todo, name: values.name, cantidad: values.cantidad } : item;
    });

    setMovimientos(newMovimientos);
    Swal.fire({
      position: "top",
      icon: "success",
      title: `Actualizacion exitosa`,
      text: `el ${values.tipo} se ha actualizado con éxito`,
      showConfirmButton: false,
      timer: 2000,
    });

    setEdit(null);
  };

  useEffect(() => {
    if (edit) setValues(edit);
    else setValues(initialState);
  }, [edit]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button className onClick={() => setOpen(false)}>
        X
      </button>
      <h1>Registro</h1>
      {/* <FormControl>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Age
        </InputLabel>
        <Select
          sx={{ width: "200px", height: "40px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          className="custom-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <div className="input">
        <label htmlFor="tipo">Tipo</label>
        <select
          disabled={edit ? true : false}
          name="select"
          id="tipo"
          defaultValue={values.tipo}
          onChange={(e) => setValues({ ...values, tipo: e.target.value })}
        >
          <option value="gasto">Gasto</option>
          <option value="ingreso">ingreso</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          required
          id="nombre"
          value={values.nombre}
          onChange={(e) => setValues({ ...values, nombre: e.target.value })}
        />
      </div>
      <div className="input">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          name="cantidad"
          id="cantidad"
          value={values.cantidad}
          onChange={(e) => setValues({ ...values, cantidad: e.target.value })}
        />
      </div>
      <Button
        sx={{
          background: "black",
          "&:hover": {
            background: "white",
            color: "black", // Define el color que deseas cuando pases el mouse sobre el botón
          },
        }}
        variant="contained"
        type="submit"
      >
        {edit ? "Edit" : "Agregar"}
      </Button>
    </form>
  );
};
