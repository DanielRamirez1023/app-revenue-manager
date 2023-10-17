/* eslint-disable react/prop-types */
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";

import "./todo-item.css";
const TodoItem = ({ todo, deleteTodo, setEdit, setOpen }) => {
  return (
    <div className="list">
      <div>
        <button onClick={() => deleteTodo(todo)}>
          <MdDeleteOutline color="red" />
        </button>
        <button
          onClick={() => {
            setOpen(true);
            setEdit(todo);
          }}
        >
          <MdModeEdit />
        </button>
      </div>
      <p>{todo.nombre}</p>
      <p className={`cantidad ${todo.tipo}`}>{Number(todo.cantidad).toLocaleString()}</p>
    </div>
  );
};

export default TodoItem;
