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
            </div>
    </div>
  )
}

export default Todo