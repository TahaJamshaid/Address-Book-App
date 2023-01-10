import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state.push(action.payload);
    },
  }
});

// this is for dispatch
export const { addUsers } = usersSlice.actions;

// this is for configureStore
export default usersSlice.reducer;