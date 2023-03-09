import './App.scss';
import Todo from './components/Todo';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Provider store={store}>
      <div className={darkMode ? "App dark" : "App"}>
      <Todo darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
    </Provider>
    
  );
}

export default App;
