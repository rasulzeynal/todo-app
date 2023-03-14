import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload)
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1)
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  }
});

export const { addTodo, deleteTodo, toggleTodo, clearCompleted} = todoSlice.actions;

export default todoSlice.reducer;
