import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    nationalityFilter: 'None',
    users: []
  },
  reducers: {
    addUsers: (state, action) => {
      state.users.push(...action.payload);
    },
    changeNationalityFilter: (state, action) => {
      state.nationalityFilter = action.payload
    }
  }
});

// this is for dispatch
export const { addUsers, changeNationalityFilter } = usersSlice.actions;

// this is for configureStore
export default usersSlice.reducer;