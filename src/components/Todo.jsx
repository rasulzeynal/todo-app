import moon from "../assests/images/icon-moon.svg";
import sun from "../assests/images/icon-sun.svg";
import "../assests/styles/todo.scss";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem,addItem } from '../redux/itemSlice';

const Todo = ({darkMode, setDarkMode}) => {
  const [text, setText] = useState('');
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now(), text };
    dispatch(addItem(newItem));
    setText('');
  };
  console.log(items);
  return (
    <div className={darkMode ? "dark todo" : "todo"}>
            <div className="head-section">
                <div className="header">
                    <h1>TODO</h1>
                    <img src={darkMode ? sun : moon} alt="moon" onClick={() => setDarkMode(!darkMode)}/>
                </div>
                <div className='input'>
                    <button onSubmit={handleSubmit}></button>
                    <input placeholder='Create a new todo...' type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                </div>
            </div>
            <div className="todo-list">
                <div className='todo-item'>
                <button ></button>
                <h3>Complete online JS course</h3>
                </div>
                <div className='todo-item'>
                <button ></button>
                <h3>Complete online JS course</h3>
                </div>
                <div className='filter-section'>
                  <p>5 items left</p>
                  <div className='filter'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                  </div>
                  <div className='clear'>
                    <button>Clear</button>
                    <button>Completed</button>
                  </div>
                </div>
            </div>
            <h4>Drag and drop to reorder list</h4>
    </div>
  )
}

export default Todo