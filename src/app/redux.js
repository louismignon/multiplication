import { createSlice } from '@reduxjs/toolkit'

export const redux = createSlice({
  name: 'redux',
  initialState: {
    type: '',
    number: 0,
    score: 0
  },
  reducers: {
    setReduxType: (state, action) => {
      state.type = action.payload;
    },
    setReduxNumber: (state, action) => {
      state.number = action.payload;
    },
    setReduxScore: (state, action) => {
      state.score = action.payload;
    }
  },
})

export const { setReduxType, setReduxNumber, setReduxScore } = redux.actions

export default redux.reducer