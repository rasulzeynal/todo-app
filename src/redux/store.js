import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer
  }
});
