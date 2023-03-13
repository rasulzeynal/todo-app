import './App.scss';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todo/>
      </PersistGate>
      
    </Provider>
    
  );
}

export default App;
