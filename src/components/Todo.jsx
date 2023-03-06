import React from 'react';
import moon from "../assests/images/icon-moon.svg";
import "../assests/styles/todo.scss"

const Todo = () => {
  return (
    <div className='todo'>
            <div className="head-section">
                <div className="header">
                    <h1>TODO</h1>
                    <img src={moon} alt="moon"/>
                </div>
                <div className='input'>
                    <button ></button>
                    <input placeholder='Create a new todo...'/>
                </div>
            </div>
            <div className='todo-list'>
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