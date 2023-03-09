import './App.scss';
import Todo from './components/Todo';
import React, { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Todo darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
