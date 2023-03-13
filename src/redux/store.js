import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import filterSlice from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedTodoReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: {
    todos: persistedTodoReducer,
    theme: themeReducer,
    filter: filterSlice
  }
});

export const persistor = persistStore(store)
