import moon from "../assests/images/icon-moon.svg";
import sun from "../assests/images/icon-sun.svg";
import "../assests/styles/todo.scss"

const Todo = ({darkMode, setDarkMode}) => {
  
  return (
    <div className={darkMode ? "dark todo" : "todo"}>
            <div className="head-section">
                <div className="header">
                    <h1>TODO</h1>
                    <img src={darkMode ? sun : moon} alt="moon" onClick={() => setDarkMode(!darkMode)}/>
                </div>
                <div className='input'>
                    <button ></button>
                    <input placeholder='Create a new todo...'/>
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