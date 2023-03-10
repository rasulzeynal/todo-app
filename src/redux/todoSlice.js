import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoToEdit = state.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = title;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
