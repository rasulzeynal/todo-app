import { createSlice } from '@reduxjs/toolkit'

const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState: 'all',
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload
    }
  }
})

export const { setVisibilityFilter } = visibilityFilterSlice.actions
export default visibilityFilterSlice.reducer


export const VisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'completed',
    SHOW_ACTIVE: 'active'
  }