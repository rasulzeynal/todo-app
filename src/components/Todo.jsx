import moon from "../assests/images/icon-moon.svg";
import sun from "../assests/images/icon-sun.svg";
import "../assests/styles/todo.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo,toggleTodo, clearCompleted } from "../redux/todoSlice";
import { toggleTheme } from "../redux/themeSlice";

const Todo = ({ darkMode, setDarkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
      dispatch(
        addTodo({
          id: nanoid(),
          title: inputValue,
        })
      );
      setInputValue("");
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  console.log(todos);
  return (
    <div className={`${theme === 'dark' ? 'dark todo' : 'todo'}`} >
      <div className="head-section">
        <div className="header">
          <h1>TODO</h1>
          <img
            src={`${theme === 'dark' ? sun : moon}`}
            alt="moon"
            onClick={handleToggleTheme}
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
      
      <div className="todo-list">
      {todos.todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
          <input type="checkbox"  className= "completed" onChange={() => handleToggleTodo(todo.id)}/>
          <h3>{todo.title}</h3>
        </div>
        ))}
        <div className="filter-section">
          <p>{todos.todos.length} items left</p>
          <div className="filter">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div className="clear">
            <button onClick={handleClearCompleted}>Clear Completed</button>
          </div>
        </div>
      </div>
      
      <h4>Drag and drop to reorder list</h4>
    </div>
  );
};

export default Todo;
