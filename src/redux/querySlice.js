import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "querySlice",
  initialState: {
    value: {fullName: "John Doe", gender: "Male", location: "Argentina"}}, 
  reducers: {
    setNewQueriedUser: (state, action)=>{
      state.value = action.payload
    }, 
    deleteQueriedUser:(state)=>{
      state.value = {}
    }
  },
})

export const {setNewQueriedUser, deleteQueriedUser} = querySlice.actions

export const selectQueriedUser = (state)=>state.currentQuery.value

export default querySlice.reducer