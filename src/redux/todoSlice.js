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
    showAllTodos: (state, action) => {
      return state.todos;
    },
    showActiveTodos: (state,action) => {
      state.todos =  state.todos.todo.completed;
    },
    showCompletedTodos: (state,action) => {
      state.todos = state.todos.todo.completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  }
});

export const { addTodo, toggleTodo, clearCompleted, showAllTodos, showActiveTodos, showCompletedTodos} = todoSlice.actions;

export default todoSlice.reducer;
