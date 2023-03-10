import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
    removeAllTodos: (state) => {
      state.splice(0, state.length);
    },
  }
});

export const { addTodo, toggleTodo, removeAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
