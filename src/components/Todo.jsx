import moon from "../assests/images/icon-moon.svg";
import sun from "../assests/images/icon-sun.svg";
import checked from "../assests/images/icon-check.svg";
import "../assests/styles/todo.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo,toggleTodo, clearCompleted} from "../redux/todoSlice";
import { toggleTheme } from "../redux/themeSlice";
import { VisibilityFilters, setVisibilityFilter  } from '../redux/filterSlice';
import { createSelector } from 'reselect'

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const theme = useSelector((state) => state.theme);
  const getVisibilityFilter = state => state.filter
const getTodos = state => state.todos.todos


const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)
const todos = useSelector(getVisibleTodos)
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
      {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
          <input type="checkbox"  className= "completed" onChange={() => handleToggleTodo(todo.id)} checked={todo.completed}/>
          <h3 style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text.title}</h3>
        </div>
        ))}
        <div className="filter-section">
          <p>{todos.length === 0 ? 'No items' : `${todos.length} items left`  }</p>
          <div className="filter">
            <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>All</button>
            <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>Active</button>
            <button onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>Completed</button>
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
