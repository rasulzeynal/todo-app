import moon from "../assests/images/icon-moon.svg";
import sun from "../assests/images/icon-sun.svg";
import "../assests/styles/todo.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo, editTodo, deleteTodo } from "../redux/todoSlice";

const Todo = ({ darkMode, setDarkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    if (editId) {
      dispatch(
        editTodo({
          id: editId,
          title: inputValue,
        })
      );
      setInputValue("");
      setEditId(null);
    } else {
      dispatch(
        addTodo({
          id: nanoid(),
          title: inputValue,
        })
      );
      setInputValue("");
    }
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInputValue(todoToEdit.title);
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  console.log(todos);
  return (
    <div className={darkMode ? "dark todo" : "todo"}>
      <div className="head-section">
        <div className="header">
          <h1>TODO</h1>
          <img
            src={darkMode ? sun : moon}
            alt="moon"
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
        <div className="input" onSubmit={handleSubmit}>
          <form style={{width:"100%",display:"flex",alignItems:"center"}}>
            <button type="submit"></button>
            <input
              placeholder="Create a new todo..."
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
        </div>
      </div>
      {todos.map((todo) => (
      <div className="todo-list" key={todo.title}>
          <div className="todo-item">
          <button onClick={() => handleDelete(todo.id)}></button>
          <h3>{todo.title}</h3>
        </div>
        <div className="filter-section">
          <p>5 items left</p>
          <div className="filter">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div className="clear">
            <button>Clear</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
      ))}
      <h4>Drag and drop to reorder list</h4>
    </div>
  );
};

export default Todo;
