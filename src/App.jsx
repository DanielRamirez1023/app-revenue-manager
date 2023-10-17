import { useState } from "react";
import style from "./App.module.css";
import Search from "./components/search";
import TodoList from "./components/TodoList";
import { Form } from "./components/Form";
import { MdMonetizationOn } from "react-icons/md";
import CurrencyInput from "react-currency-input-field";
import ModalRegistro from "./components/Modal";

const App = () => {
  const [saldoInicial, setSaldoInicial] = useState(0);
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [movimientos, setMovimientos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filtro, setFiltro] = useState("todos");
  const [valueSearch, setValueSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <div>
          <h1>Gestor de Ingresos y gastos</h1>
        </div>
        <div className={style.contentSaldos}>
          <div>
            <label htmlFor="saldoInicial">Saldo inicial: </label>
            <MdMonetizationOn className={style.iconDollar} />
            <CurrencyInput
              name="inicial"
              id="inicial"
              className={style.taskInput}
              placeholder="Saldo Inicial"
              value={saldoInicial}
              onValueChange={(value) => {
                setSaldoInicial(value);
                setSaldoFinal(value);
              }}
              // Puedes personalizar el prefijo de la moneda
              decimalsLimit={2} // Puedes limitar la cantidad de decimales
            />
          </div>

          <div>
            <label htmlFor="saldoFinal">Saldo Final: </label>
            <MdMonetizationOn className={style.iconDollar} />
            <CurrencyInput id="saldoFinal" placeholder="Saldo Final" value={saldoFinal} decimalsLimit={2} readOnly />
          </div>
        </div>
      </header>
      <main className={style.container}>
        {/* <div>
          <Form
            movimientos={movimientos}
            setMovimientos={setMovimientos}
            edit={edit}
            setEdit={setEdit}
            saldoFinal={saldoFinal}
            setSaldoFinal={setSaldoFinal}
          />
        </div> */}
        <div className={style.appwrapper}>
          <div className={style.headerCard}>
            <ModalRegistro open={open} setOpen={setOpen}>
              <Form
                movimientos={movimientos}
                setMovimientos={setMovimientos}
                edit={edit}
                setEdit={setEdit}
                saldoFinal={saldoFinal}
                setSaldoFinal={setSaldoFinal}
                open={open}
                setOpen={setOpen}
              />
            </ModalRegistro>
            <div className={style.contador}>{movimientos.length}</div>
          </div>
          <div>
            <h1>Movimientos</h1>
          </div>
          <div>
            <Search
              setMovimientos={setMovimientos}
              setFiltro={setFiltro}
              valueSearch={valueSearch}
              setValueSearch={setValueSearch}
              filtro={filtro}
            />
          </div>
          <div>
            <TodoList
              valueSearch={valueSearch}
              movimientos={movimientos}
              setMovimientos={setMovimientos}
              setEdit={setEdit}
              filtro={filtro}
              setOpen={setOpen}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
