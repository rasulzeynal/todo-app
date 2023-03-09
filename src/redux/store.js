import itemReducer from './itemSlice';
import { configureStore } from '@reduxjs/toolkit';



export default configureStore({
    reducer: {
      items: itemReducer,
    },
  });
  