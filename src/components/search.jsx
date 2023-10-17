/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./search.css";
const Search = ({ setFiltro, valueSearch, setValueSearch, filtro }) => {
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };
  return (
    <div className="content-search">
      <input
        name="search"
        className="taskInput"
        placeholder="Buscador"
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <div className="content-options">
        <div>
          <input
            type="radio"
            id="todos"
            name="opcion"
            value="todos"
            onChange={handleChange}
            checked={filtro === "todos"}
          />
          <label htmlFor="todos">Todos</label>
        </div>
        <div>
          <input
            type="radio"
            id="Ingresos"
            name="opcion"
            value="ingresos"
            onChange={handleChange}
            checked={filtro === "ingresos"}
          />
          <label htmlFor="Ingresos">Ingresos</label>
        </div>
        <div>
          <input
            type="radio"
            id="gastos"
            name="opcion"
            value="gastos"
            onChange={handleChange}
            checked={filtro === "gastos"}
          />
          <label htmlFor="gastos">gastos</label>
        </div>
      </div>
    </div>
  );
};

export default Search;
